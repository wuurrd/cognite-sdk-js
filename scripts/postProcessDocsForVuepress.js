const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const DOCS_FOLDER = path.resolve(__dirname, '../docs/');
const README_FILE = path.resolve(DOCS_FOLDER, 'README.md');

function readFile(path) {
  const data = fs.readFileSync(path);
  return data.toString('utf-8');
}

function getLinesFromFile(path) {
  const file = readFile(path);
  return file.split('\n');
}

function filterLinesWithRegEx(lines, regEx) {
  const matches = [];
  lines.forEach(line => {
    const match = line.match(regEx);
    if (match) {
      matches.push(match);
    }
  });
  return matches;
}

function getAllClasses() {
  const lines = getLinesFromFile(README_FILE);
  const classRegEx = /\[([a-zA-Z]+)\]\(classes\/(.*)\)/;
  const matches = filterLinesWithRegEx(lines, classRegEx);
  const allClasses = matches.map(
    match => ({
      name: match[1],
      filePath: 'classes/' + match[2]
    })
  );
  const uniqueClasses = _.uniqBy(allClasses, item => item.name);
  return uniqueClasses;
}

function getAllInterfaces() {
  const lines = getLinesFromFile(README_FILE);
  const interfaceRegEx = /\[([a-zA-Z]+)\]\(interfaces\/(.*)\)/;
  const matches = filterLinesWithRegEx(lines, interfaceRegEx);
  const allInterfaces = matches.map(
    match => ({
      name: match[1],
      filePath: 'interfaces/' + match[2]
    })
  );
  const uniqueInterfaces = _.uniqBy(allInterfaces, item => item.name);
  return uniqueInterfaces;
}

function generateSidebarGroup(title, items) {
  return {
    title,
    collapsable: true,
    children: items.map(item => ['./' + item.filePath, item.name]),
  };
};

function generateVuePressSidebar() {
  const classes = getAllClasses();
  const interfaces = getAllInterfaces();
  const sidebar = [
    generateSidebarGroup('Classes', classes),
    generateSidebarGroup('Interfaces', interfaces),
  ];
  return sidebar;
}

function jsonPrint(obj) {
  return JSON.stringify(obj, null, 2);
}
console.log(jsonPrint(generateVuePressSidebar()));
