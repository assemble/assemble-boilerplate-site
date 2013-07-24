/*
 * Assemble, component generator for Grunt.js
 * https://github.com/assemble/
 *
 * Copyright (c) 2013 Upstage
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      // Task-level options
      options: {
        flatten: true,
        data: 'src/**/*.{json,yml}',
        assets: 'site/assets',
        helpers: 'src/helpers/helper-*.js',
        layoutdir: 'src/layouts',
        partials: ['src/includes/**/*.hbs'],
      },
      site: {
        // Target-level options
        options: {layout: 'default.hbs'},
        files: [
          { expand: true, cwd: 'src', src: ['*.hbs', '!index.hbs'], dest: 'site/' },
          { expand: true, cwd: 'src', src: ['index.hbs'], dest: './' }
        ]
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      all: ['site/**/*.{html,md}', 'index.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble']);
};
