const path = require('path');
const glob = require('glob');

const config = require('./webpack.config');

const entry = glob
  .sync('src/!(bundles)/**/!(*.spec)*.js')
  .reduce((acc, fileName) => {
    acc[fileName.replace('src/', '').replace('.js', '')] = path.resolve(__dirname, fileName);
    return acc;
  }, {});

module.exports = Object.assign({}, config, { entry });