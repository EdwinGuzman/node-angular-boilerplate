/*jslint indent: 2, maxlen: 80 */
/*globals module */

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngAnnotate: {
      locinator: {
        files: {
          'public/dist/app.annotate.js': ['public/scripts/**/*.js']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'public/dist/app.min.js': ['public/dist/app.annotate.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('buildJS', [
    'ngAnnotate', 'uglify'
  ]);

};