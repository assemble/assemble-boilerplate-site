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

    // The assemble 'task'
    assemble: {
      // Task-level options.
      options: {
        flatten: true,
        assets: 'dist/assets',
        layout: 'src/templates/layouts/default.hbs',
        partials: ['src/templates/partials/*.hbs'],
        ext: '.html'
      },
      pages: {
        files: {
          'dist/': ['src/templates/pages/*.hbs']
        }
      }
    },

    // Remove HTML files from ./dist before rebuilding.
    clean: {
      dest: {
        src: ['dist/**/*.html']
      }
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble']);

};
