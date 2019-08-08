const { dereferenceGroupChildren, getGroup, getTemplateFilePath, loadTemplate, printAsJson } = require('./utils');

const CLASS_KIND = 'Class';
const CONSTRUCTORS_GROUP_TITLE = 'Constructors';
const TEMPLATE_FILE_PATH = getTemplateFilePath('class');

function filterClasses(resources) {
  return filterResourcesOfKind(resources, CLASS_KIND);
}

function renderClass(typedocClass) {
  const template = loadTemplate(TEMPLATE_FILE_PATH);
  return template(getClassTemplateData(typedocClass));
}

function getClassTemplateData(typedocClass) {
  const templateData = {
    name: typedocClass.name,
    constructors: getClassContructors(typedocClass),
  };
  printAsJson(templateData);
  return templateData;
}

function getClassContructors(typedocClass) {
  const constructorsGroup = getGroup(typedocClass.groups, CONSTRUCTORS_GROUP_TITLE);
  return dereferenceGroupChildren(typedocClass, constructorsGroup);
}

module.exports = {
  filterClasses,
  renderClass,
  getClassTemplateData,
  getClassContructors,
};
