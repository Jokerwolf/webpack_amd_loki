const webpackFallbacksConfig = require('../webpack.fallbacks.config');
const webpackBundlesConfig = require('../webpack.bundles.config');

const config = {
  'fallbacks-development': Object.assign({ watch: false }, webpackFallbacksConfig, { mode: 'development' }),
  'fallbacks-production': Object.assign({ watch: false }, webpackFallbacksConfig, { mode: 'production' }),
  'bundles-development': Object.assign({ watch: false }, webpackBundlesConfig, { mode: 'development' }),
  'bundles-production': Object.assign({ watch: false }, webpackBundlesConfig, { mode: 'production' }),
};

module.exports = config;
