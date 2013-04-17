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

    // Get metadata to use in templates.
    pkg: grunt.file.readJSON('package.json'),


    assemble: {
      options: {
        flatten: true,
        assets: '.',
        layout: 'src/templates/layouts/default.hbs',
        partials: ['src/templates/partials/*.hbs']
      },
      // Files to build into pages
      pages: {
        files: {
          './dest/': ['src/templates/pages/*.hbs', '!src/templates/pages/index.hbs']
          // './': ['src/templates/pages/index.hbs']
        }        
      },
      // Split index into different target for example
      home: {
        options: {
          layout: 'src/templates/layouts/home.hbs'
        },
        files: {
          './': ['src/templates/pages/index.hbs']
        }
      }
    },


    // Clean out ./dist before rebuilding.
    clean: {
      dest: {
        src: ['dest/**/*.html']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble']);

};
