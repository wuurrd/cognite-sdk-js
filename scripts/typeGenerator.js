// Copyright 2019 Cognite AS

const SwaggerParser = require("swagger-parser");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;
const fsExtra = require('fs-extra')
const path = require('path');
const lodash = require('lodash');

/**
 * Converts JSON Schema to types with specified language
 * 
 * @param  {string} urlPath Path for directory
 * @param  {string} language Specified language for what you want to generate
 * @param  {string} schema  The content of the schema
 * @param  {string} schemaName The name of the schema
 */

async function convertType(urlPath, language, schema, schemaName) {
    const json = JSON.stringify(schema, null, 2);
    const jsonFile = path.resolve(urlPath, `${schemaName}.json`);
    await fs.writeFile(jsonFile, json);
    const outputPath = path.resolve(urlPath, `${schemaName}.${language}`);
    const string = 'quicktype --lang '.concat(language, ' --out ', outputPath, ' --src-lang schema ', '--src ', jsonFile, ' --just-types');
    await exec(string);
    await fs.unlink(jsonFile);
    return outputPath;
}

/**
 * FileChange.ts and DataExternalAsset.ts has conflicting interfaces with other classes
 * This method handles these two specialcases for TypeScript types
 * 
 * @param {string} url Path to folder
 */
function handleSpecialCase(url, file, regex, result) {
    let content = fsExtra.readFileSync(url + file).toString();
    let array = regex.exec(content);
    while (array) {
        content = content.replace(regex, result);
        array = regex.exec(content);
    }
    fsExtra.writeFileSync(url + file, content);
}

/**
 * Changes all values in @param dateKeys from number to Date
 * 
 * @param {Array} fileArray Array of all the files
 * @param {string} url The path
 * @param {Array} dateKeys Array of all values that should be Date and not number
 */
function generateDateTypes(fileArray, url, dateKeys) {
    for (let file of fileArray) {
        let content = fsExtra.readFileSync(url + '/' + file).toString();
        for (let keyword of dateKeys) {
            const regex = new RegExp(` ${keyword}.* (.+);`, 'g');
            let array = regex.exec(content);
            while (array) {
                if (array[1] == "number") {
                    content = content.replace(regex, ` ${keyword}: Date;` );
                } else {
                    const regex2 = new RegExp(`export interface (.*${array[1]}) {`, 'g');
                    let array2 = content.match(regex2);
                    while (array2) {
                        const maxRegex = /max.*: number;/;
                        const minRegex = /min.*: number;/;
                        content = content.replace(maxRegex, " max?: Date;" );
                        content = content.replace(minRegex, " min?: Date;" );
                        array2 = regex2.exec(content);
                    }
                }
                array = regex.exec(content);
            }
        }
        content = handleEndStartDateTypes(content, file);
        fsExtra.writeFileSync(url + '/' + file, content);
    }
}

/**
 * Some of the Datapoints(...).ts files has start and end values that should be Date or string, not number or string
 * 
 * @param {string} content Content of the file.
 */
function handleEndStartDateTypes(content, file) {
    const regex = new RegExp('Datapoints.*\.ts');
    if (file.match(regex)) {
        const regexEnd = / end\?:.*string;/g;
        const regexStart = / start\?:.*string;/g;
        let array = regexEnd.exec(content);
        while (array) {
            content = content.replace(regexEnd, ' end?: Date | string;');
            content = content.replace(regexStart, ' start?: Date | string;')
            array = regex.exec(content);
        }
    }
    return content;
}

/**
 * Creates the index.ts file in the /generated folder
 * 
 * @param {Array} fileArray All the files in an array
 * @param {string} url the path to the folder
 */
function generateIndexFile(fileArray, url, language) {
    const urlPath = path.resolve(url, 'index.' + language);
    fsExtra.writeFileSync(urlPath, '\n');
    for (let file of fileArray) {
        const className = file.substring(0, file.length - 3);
        const data = `from src.types.generated.${className} import *\n`;
        fsExtra.appendFileSync(urlPath, data);
    }
}

function countReoccuringNames(url, fileArray, regex) {
    const hashMap = {};
    for (let file of fileArray) {
        const content = fsExtra.readFileSync(url + file).toString();
        let array = regex.exec(content);
        while (array) {
            hashMap[array[1]] = hashMap[array[1]] || 0;
            hashMap[array[1]]++;
            array = regex.exec(content);
        }
    }
    return hashMap;
}

function generateTypeNames(fileArray, hashMap, regex, url) {
    for (let file of fileArray) {
        let content = fsExtra.readFileSync(url + file).toString();
        const className = file.substring(0, file.length - 3);
        for (let key of Object.keys(hashMap)) {
            if (hashMap[key] > 1) {
                let array = regex.exec(content);
                while (array) {
                    if (key !== className) {
                        content = content.replace(new RegExp(`class ${key}:`), `class ${className + key}:`);
                    }
                    array = regex.exec(content);
                }
                const regex2 = new RegExp(`: ${key}(,|\\n|\\))`, 'g');
                let array2 = regex2.exec(content);
                while (array2) {
                    content = content.replace(regex2, `: ${className + key}$1`);                        
                    array2 = regex2.exec(content);
                }
                const regex3 = new RegExp(`: (Optional|List)\\[${key}\\](,|\\n|\\))`, 'g');
                let array3 = regex3.exec(content);
                while (array3) {
                    content = content.replace(regex3, `: $1\[${className + key}\]$2`);                        
                    array3 = regex3.exec(content);
                }
                const regex4 = new RegExp(`: Optional\\[List\\[${key}\\]\\](,|\\n|\\))`, 'g');
                let array4 = regex4.exec(content);
                while (array4) {
                    content = content.replace(regex4, `: Optional\[List\[${className + key}\]\]$1`);                        
                    array4 = regex4.exec(content);
                }
            }
        }
        fsExtra.writeFileSync(url + file, content);
    }
}

async function createFilesFromJSON(api, urlPath, language) {
    const promises = Object.keys(api.components.schemas).map(schemaName => {
        const schema = api.components.schemas[schemaName];
        const newSchemaName = schemaName.split('_').map(a => lodash.upperFirst(a)).reduce((a, b) => a + b);
        return convertType(urlPath, language, schema, newSchemaName);
    });
    const promises2 = Object.keys(api.components.responses).map(schemaName => {
        if (schemaName === "ProjectResponse") {
            const schema = api.components.responses[schemaName].content['application/json'].schema;
            const newSchemaName = schemaName.split('_').map(a => lodash.upperFirst(a)).reduce((a, b) => a + b);
            return convertType(urlPath, language, schema, newSchemaName);
        }
    });
    promises.push(...promises2);
    await Promise.all(promises);
}

/**
 * Main function to run the script
 * 
 * @param {string} language 
 * @param {string} urlPath 
 */
function generateTypes(language, urlPath) {
    SwaggerParser.dereference('/Users/eirikdahlen/workspace/SDKjs/cognitesdk-js/src/types/v1_spec.json', {}, async (_, api) => {
        urlPath = urlPath + '/generated';
        fsExtra.removeSync(urlPath);
        await exec('mkdir '.concat(urlPath)).catch((err) => console.log(err));

        await createFilesFromJSON(api, urlPath, language);
        
        const url = './src/types/generated/';
        const regex = /class (.+):/g;
        const fileArray = fsExtra.readdirSync(url);
        const hashMap = countReoccuringNames(url, fileArray, regex);
        generateTypeNames(fileArray, hashMap, regex, url);
        handleSpecialCase(path.resolve(__dirname, '../src/types/generated/'), '/FileChange.' + language, / FileChangeUpdate(:|\n|\))/g, ' FileChangeObject$1');
        handleSpecialCase(path.resolve(__dirname, '../src/types/generated/'), '/DataExternalAsset.' + language, / (List\[|.*)DataExternalAssetItem(:|\])/g, ' $1DataExternalAssetElement$2');
        // const dateKeys = [
        //     'createdTime',
        //     'lastUpdatedTime',
        //     'uploadedTime',
        //     'deletedTime',
        //     'timestamp',
        //   ];
        // generateDateTypes(fileArray, path.resolve(__dirname, '../src/types/generated/'), dateKeys);
        generateIndexFile(fileArray, url, language);
    });
}

/**
 * Type in the desired language as parameter and path to where the files should be generated
 * C# - cs, Go - go, Rust - rs, Crystal - cr, C++ - c++, Objective-C - objc, Java - java, TypeScript - ts, JavaScript - js, Flow - flow,  
  Swift - swift, Kotlin (beta) - kotlin, Elm - elm, JSON Schema - schema, Ruby - ruby, Dart - dart, Python - py, Pike - pike. 
 */
generateTypes('py', path.resolve(__dirname, '../src/types/'));
