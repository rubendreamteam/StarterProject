/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    qunit: {
      files: ['test/**/*.html']
    },
    lint: {
      files: ['grunt.js', 'source/ui/*/*.js', 'source/modules/**/*.js', 'source/test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false, // Allow console log script to pass. However, undefined variables will not be found
        boss: false,
        eqnull: true,
        browser: true,
        jquery: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit');

};