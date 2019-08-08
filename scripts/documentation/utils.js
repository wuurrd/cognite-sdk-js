const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const BUILD_FOLDER = path.resolve(__dirname, 'build');

function filterResourcesOfKind(resources, kindString) {
  return resources.filter(resource => resource.kindString === kindString);
}

function dereferenceGroupChildren(parentResource, group) {
  return group.children.map(resourceId => getResourceById(parentResource.children, resourceId));
}

function getGroup(groups, title) {
  const matches = groups.filter(group => group.title === title);
  return matches[0] || null;
}

function loadTemplate(filePath) {
  const source = readFile(filePath);
  const template = Handlebars.compile(source);
  return template;
}

function readFile(filePath) {
  return fs.readFileSync(filePath).toString('utf-8');
}

function getResourceById(resources, id) {
  const matches = resources.filter(resource => resource.id === id);
  return matches[0] || null;
}

function getTemplateFilePath(name) {
  return path.resolve(__dirname, `templates/${name}.hbs`);
}

function printAsJson(obj) {
  console.log(JSON.stringify(obj, null, 2));
}

function ensureFolderExists(directoryPath) {
  if (!fs.existsSync(directoryPath)){
    fs.mkdirSync(directoryPath);
  }
}

function ensureBuildFolderExists() {
  ensureFolderExists(BUILD_FOLDER);
}

function writeMarkdown(relativeFilePath, content) {
  ensureBuildFolderExists();
  fs.writeFileSync(path.resolve(BUILD_FOLDER, relativeFilePath), content);
}

module.exports = {
  filterResourcesOfKind,
  dereferenceGroupChildren,
  getGroup,
  loadTemplate,
  readFile,
  getResourceById,
  getTemplateFilePath,
  printAsJson,
  writeMarkdown,
};
