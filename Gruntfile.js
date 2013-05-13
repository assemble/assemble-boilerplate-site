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
      options: {
        assets: 'dist/assets',
        data: 'src/data/*.{json,yml}',
        partials: [
          'src/templates/partials/*.hbs',
          'src/content/*.hbs'
        ],
      },
      html_output: {
        options: {
          layout: 'src/templates/layouts/post.hbs'
        },
        files: [ 
          { expand: true, cwd: 'src', src: ['posts/*.hbs', '!**/*.md.hbs'], dest: 'dist/' }
        ]
      },
      markdown_output: {
        options: {
          ext: '',
          layout: 'src/templates/layouts/post.md.hbs'
        },
        files: [ 
          { expand: true, cwd: 'src/posts', src: ['*.md.hbs'], dest: 'dist/markdown' }
        ]
      },
      pages: {
        options: {
          flatten: true,
          layout: 'src/templates/layouts/default.hbs'
        },
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
        pages: ['dist/**/*.{html,md}', 'index.html']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble']);
};
