const path = require('path');
const glob = require('glob');

const config = require('./webpack.config');

const entry = glob
  .sync('src/bundles/**/*.js')
  .reduce((acc, fileName) => {
    acc[fileName.replace('src/', '').replace('.js', '')] = path.resolve(__dirname, fileName);
    return acc;
  }, {});

const optimization = {
  runtimeChunk: {
    name: '../runtime.bundles'
  },
};

module.exports = Object.assign({}, config, { entry, optimization: Object.assign({}, config.optimization, optimization) });