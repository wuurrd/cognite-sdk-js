// Copyright 2019 Cognite AS

const SwaggerParser = require("swagger-parser");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;
const fsExtra = require('fs-extra')
const path = require('path');


async function convertType(urlPath, language, schema, schemaName) {
    const json = JSON.stringify(schema, null, 2);
    const jsonFile = path.resolve(urlPath, `${schemaName}.json`);
    await fs.writeFile(jsonFile, json);
    const outputPath = path.resolve(urlPath, `${schemaName}.${language}`);
    const string = 'quicktype --lang '.concat(language, ' --out ', outputPath, ' --src-lang schema ', '--src ', jsonFile, ' --just-types --explicit-unions');
    await exec(string);
    await fs.unlink(jsonFile);
    return outputPath;
}

function generateTypes(language, urlPath) {
    SwaggerParser.dereference('https://storage.googleapis.com/cognitedata-api-docs/dist/v1.json', {}, async (_, api) => {
        urlPath = urlPath + '/types';
        fsExtra.removeSync(urlPath);
        await exec('mkdir '.concat(urlPath)).catch((err) => console.log(err));

        const promises = Object.keys(api.components.schemas).map(schemaName => {
            const schema = api.components.schemas[schemaName];
            return convertType(urlPath, language, schema, schemaName);
        });
        const files = await Promise.all(promises);
        console.log(JSON.stringify(files, null, 2));
    });
}

/**
 * Type in the desired language as parameter and path to where the files should be generated
 * C# - cs, Go - go, Rust - rs, Crystal - cr, C++ - c++, Objective-C - objc, Java - java, TypeScript - ts, JavaScript - js, Flow - flow,  
  Swift - swift, Kotlin (beta) - kotlin, Elm - elm, JSON Schema - schema, Ruby - ruby, Dart - dart, Python - py, Pike - pike. 
 */
generateTypes('ts', path.resolve(__dirname, '../src/types/'));