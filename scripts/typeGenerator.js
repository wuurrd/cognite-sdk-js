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
 * @param  urlPath Path for directory
 * @param  language Specified language for what you want to generate
 * @param  schema  The content of the schema
 * @param  schemaName The name of the schema
 */

async function convertType(urlPath, language, schema, schemaName) {
    const json = JSON.stringify(schema, null, 2);
    const jsonFile = path.resolve(urlPath, `${schemaName}.json`);
    await fs.writeFile(jsonFile, json);
    const outputPath = path.resolve(urlPath, `${schemaName}.${language}`);
    const string = 'quicktype --lang '.concat(language, ' --out ', outputPath, ' --src-lang schema ', '--src ', jsonFile, ' --just-types --acronym-style original');
    await exec(string);
    await fs.unlink(jsonFile);
    return outputPath;
}

/**
 * FileChange.ts and DataExternalAsset.ts has conflicting interfaces with other classes
 * This method handles these two specialcases
 * 
 * @param url Path to folder
 */
function handleSpecialCase(url, file, regex, result) {
    let content = fsExtra.readFileSync(url + file).toString();
    let array = regex.exec(content.toString());
    while (array) {
        content = content.replace(regex, result).toString();
        array = regex.exec(content);
    }
    fsExtra.writeFileSync(url + file, content);
}

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
                    const maxRegex = /max.*: (.+);/g;
                    const minRegex = /min.*: (.+);/g;
                    content = content.replace(maxRegex, " max?: Date;" );
                    content = content.replace(minRegex, " min?: Date;" );
                    
                }
                array = regex.exec(content);
            }
        }
        fsExtra.writeFileSync(url + '/' + file, content);
    }
}

/**
 * Creates the index.ts file in the /generated folder
 * 
 * @param fileArray All the files in an array
 * @param url the path to the folder
 */
function generateIndexFile(fileArray, url) {
    const urlPath = path.resolve(url, 'index.ts');
    fsExtra.writeFileSync(urlPath, '// Copyright 2019 Cognite AS');
    for (let file of fileArray) {
        const className = file.substring(0, file.length - 3);
        const data = "\nexport * from " + `'./${className}';`;
        fsExtra.appendFileSync(urlPath, data);
    }
}

function generateTypes(language, urlPath) {
    SwaggerParser.dereference('/Users/eirikdahlen/workspace/SDKjs/cognitesdk-js/src/types/v1_spec.json', {}, async (_, api) => {
        urlPath = urlPath + '/generated';
        fsExtra.removeSync(urlPath);
        await exec('mkdir '.concat(urlPath)).catch((err) => console.log(err));

        const promises = Object.keys(api.components.schemas).map(schemaName => {
            const schema = api.components.schemas[schemaName];
            const newSchemaName = schemaName.split('_').map(a => lodash.upperFirst(a)).reduce((a, b) => a + b);
            // const newSchemaName = lodash.chain(schemaName).split('_').upperFirst().values();
            return convertType(urlPath, language, schema, newSchemaName);
        });
        const promises2 = Object.keys(api.components.responses).map(schemaName => {
            if (schemaName === "ProjectResponse") {
                const schema = api.components.responses[schemaName].content['application/json'].schema;
                const newSchemaName = schemaName.split('_').map(a => lodash.upperFirst(a)).reduce((a, b) => a + b);
                // const newSchemaName = lodash.chain(schemaName).camelCase().upperFirst();
                return convertType(urlPath, language, schema, newSchemaName);
            }
        });
        promises.push(...promises2);
        const files = await Promise.all(promises);
        console.log(JSON.stringify(files, null, 2));

        const url = './src/types/generated/';
        const fileArray = fsExtra.readdirSync(url);
        // console.log(JSON.stringify(fileArray, null, 2));
        const hashMap = {};
        const regex = /export (interface|enum) (.+) {/g;
            for (let file of fileArray) {
                const content = fsExtra.readFileSync(url + file).toString();
                let array = regex.exec(content);
                while (array) {
                    hashMap[array[2]] = hashMap[array[2]] || 0;
                    hashMap[array[2]]++;
                    array = regex.exec(content);
                }
            }
        for (let file of fileArray) {
            let content = fsExtra.readFileSync(url + file).toString();
            const className = file.substring(0, file.length - 3);
            for (let key of Object.keys(hashMap)) {

                if (hashMap[key] > 1) {
                    let array = regex.exec(content);
                    const regex2 = new RegExp(`:\\s+${key}(\\[\\])*;`, 'g');
                    let array2 = regex2.exec(content);
                    while (array) {
                        if (key !== className) {
                        content = content.replace(new RegExp(`export (interface|enum) ${key} {`), `export $1 ${className + key} {`);
                        }
                        array = regex.exec(content);
                    }
                    while (array2) {
                        content = content.replace(regex2, `: ${className + key}$1;`);                        
                        array2 = regex2.exec(content);
                    }
                }
            }
            fsExtra.writeFileSync(url + file, content);
        }

        handleSpecialCase(path.resolve(__dirname, '../src/types/generated/'), '/FileChange.ts', / FileChangeUpdate/g, ' FileChangeObject');
        handleSpecialCase(path.resolve(__dirname, '../src/types/generated/'), '/DataExternalAsset.ts', / DataExternalAssetItem/g, ' DataExternalAssetElement');
        // const dateKeys = [
        //     'createdTime',
        //     'lastUpdatedTime',
        //     'uploadedTime',
        //     'deletedTime',
        //     'timestamp',
        //   ];
        // generateDateTypes(fileArray, path.resolve(__dirname, '../src/types/generated/'), dateKeys);
        generateIndexFile(fileArray, url);
    });
}

/**
 * Type in the desired language as parameter and path to where the files should be generated
 * C# - cs, Go - go, Rust - rs, Crystal - cr, C++ - c++, Objective-C - objc, Java - java, TypeScript - ts, JavaScript - js, Flow - flow,  
  Swift - swift, Kotlin (beta) - kotlin, Elm - elm, JSON Schema - schema, Ruby - ruby, Dart - dart, Python - py, Pike - pike. 
 */
generateTypes('ts', path.resolve(__dirname, '../src/types/'));