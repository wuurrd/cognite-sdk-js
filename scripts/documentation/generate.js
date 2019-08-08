const path = require('path');
const typedocOutput = require(path.resolve(__dirname, '../../a.json'));
const { getResourceById, writeMarkdown } = require('./utils');
const { renderClass } = require('./class');

const cogniteClientClass = getResourceById(typedocOutput.children, 2120);
writeMarkdown(`${cogniteClientClass.name}.md`, renderClass(cogniteClientClass));