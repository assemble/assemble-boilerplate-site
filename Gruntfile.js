/*
 * assemble-examples-basic
 * https://github.com/assemble/assemble-examples-basic
 *
 * Copyright (c) 2013 Brian Woodward, Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      options: {
        flatten: true,
        assets: 'dist/assets',
        layout: 'src/templates/layouts/default.hbs',
        partials: 'src/templates/partials/*.hbs',
        data: 'src/data/*.{json,yml}'
      },
      pages: {
        files: {
          'dist/': ['src/templates/pages/*.hbs', '!**/index.hbs'],
          './': ['src/templates/pages/index.hbs']
        }        
      }
    },

    // Before generating any new files, 
    // remove any previously-created files.
    clean: {
      dest: {
        pages: ['dist/*.html', 'index.html']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble', 'beautify']);

};
