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
    csslint: {
      basic: {
        src: "source/**/*.css",
        rules: {
          "box-sizing": false,
          "compatible-vendor-prefixes": false,
          "empty-rules": false,
          "ids": true,
          "import": false,
          "important": false,
          "known-properties": false,
          "outline-none": false,
          "overqualified-elements": 2,
          "regex-selectors": false,
          "star-property-hack": false,
          "unique-headings": false,
          "universal-selector": false,
          "underscore-property-hack": false,
          "unqualified-attributes": false
        }
      }
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

  // Import needed modules
  grunt.loadNpmTasks( "grunt-css" );

  // Default task.
  grunt.registerTask('default', 'lint csslint qunit');

};