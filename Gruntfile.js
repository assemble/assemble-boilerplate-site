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
        assets: 'dist/assets',
        data: 'src/**/*.{json,yml}',
        partials: [
          'src/templates/partials/**/*.hbs',
          'src/content/*.hbs'
        ],
      },
      pages: {
        // Target-level options
        options: {
          flatten: true,
          layout: 'src/templates/layouts/default.hbs'
        },
        files: [
          { expand: true, cwd: 'src/templates/pages', src: ['*.hbs', '!index.hbs'], dest: 'dist/' },
          { expand: true, cwd: 'src/templates/pages', src: ['index.hbs'], dest: './' }
        ]
      },
      posts: {
        options: {
          layout: 'src/templates/layouts/post.hbs'
        },
        files: [
          { expand: true, cwd: 'src', src: ['posts/*.hbs', '!**/*.md.hbs'], dest: 'dist/' }
        ]
      },
      // Example of how to build markdown pages
      markdown: {
        options: {
          ext: '',
          layout: 'src/templates/layouts/post.md.hbs'
        },
        files: [
          { expand: true, cwd: 'src/posts', src: ['*.md.hbs'], dest: 'dist/markdown' }
        ]
      },
      // Example of loading custom helpers
      helpers: {
        options: {
          flatten: true,
          registerFunctions: function(engine) {
            var helpers = require('./lib/custom-helpers');
            engine.engine.registerFunctions(helpers);
          }
        },
        files: [
          { expand: true, cwd: 'src/templates/custom-helpers', src: ['helpers.hbs'], dest: 'dist/' }
        ]
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      all: ['dist/**/*.{html,md}', 'index.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble']);
};
