/*
 * assemble-examples-basic
 * https://github.com/assemble/assemble-examples-basic
 *
 * Copyright (c) 2013 Brian Woodward, Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Get metadata to use in templates.
  var pkg = grunt.file.readJSON('package.json');

  // Project configuration.
  grunt.initConfig({
    pkg: pkg,

    assemble: {
      options: {
        flatten: true,
        assets: 'dest/assets',
        layout: 'src/templates/layouts/default.hbs',
        partials: ['src/templates/partials/*.hbs']
      },
      pages: {
        files: {
          'dest/': ['src/templates/pages/*.hbs', '!src/templates/pages/index.hbs'],
          './': ['src/templates/pages/index.hbs']
        }        
      },
      files_object: {
        options: {
          layout: 'test/files/layout.hbs',
          data: 'test/yaml/data/**/*.*'
        },
        files: {
          'test/actual/yaml/': ['test/yaml/*.hbs']
        }
      },
      multi: {
        options: {
          layout: 'test/files/layout.hbs'
        },
        files: {
          'test/actual/multi/dest1/': ['test/files/**/*.hbs', '!test/files/layout*.*'],
          'test/actual/multi/dest2/': ['test/files/**/*.md'],
          'test/actual/multi/dest2/sub-dest/': ['test/files/**/*.hbs', '!test/files/layout*.*']
        }
      }
    },

    // Clean before rebuilding.
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
