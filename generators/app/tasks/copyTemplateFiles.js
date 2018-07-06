const mkdirp = require('mkdirp');

const { TEMPLATE_FILES, LINTER_PATH, LOCAL_STORAGE_FILE } = require('../constants');

const { copyTpl, copy } = require('./utils');

module.exports = function copyTemplateFiles() {
  TEMPLATE_FILES.forEach(path => copy.bind(this)(path, path, null, { projectName: this.projectName }));

  mkdirp(this.destinationPath(`${this.projectName}/src/app/assets/`));

  copyTpl.bind(this)('public/_index.html', 'public/index.html', {
    title: this.projectName
  });

  copyTpl.bind(this)(LOCAL_STORAGE_FILE, LOCAL_STORAGE_FILE, {
    projectName: this.projectName
  });

  copy.bind(this)(LINTER_PATH.src, LINTER_PATH.destination);
};
