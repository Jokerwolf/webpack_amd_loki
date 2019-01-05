const config = function(grunt) {
  'use strict';
  const tasks = {
    scope: ['devDependencies', 'dependencies'],
  };

  const options = {
    config: {
      src: 'tasks/*.js'
    }
  };

  const configs = require('load-grunt-configs')(grunt, options);
  require('load-grunt-tasks')(grunt, tasks);

  grunt.initConfig(configs);
  
  /*******************************************************************************************************
  * 🚀 Production 🚀
  *******************************************************************************************************/
  grunt.task.registerTask('production', [
    'run:cleanup',
    'webpack:fallbacks-production',
    'webpack:bundles-production',
  ]);

  /*******************************************************************************************************
  * 🚧 Development 🚧
  *******************************************************************************************************/
  grunt.task.registerTask('development', [
    'run:cleanup',
    'webpack:development',
    'webpack:fallbacks-development',
    'webpack:bundles-development',
  ]);
};

module.exports = config;