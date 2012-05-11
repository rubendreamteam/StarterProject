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
        /*curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,*/
        noarg: false, // Allow the arguments.callee = arguments.callee.caller; for Paul Irish console wrapper
        /*sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,*/
        jquery: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit');

};