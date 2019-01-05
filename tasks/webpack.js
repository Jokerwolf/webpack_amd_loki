const webpackConfig = require('../webpack.config');

const config = {
  development: Object.assign({ watch: false }, webpackConfig, { mode: 'development' }),
  production: Object.assign({ watch: false }, webpackConfig, { mode: 'production' }),
};

module.exports = config;
