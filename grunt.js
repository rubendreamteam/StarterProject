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
          "known-properties": false, // Not nice, but the hack rules are not working
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

  grunt.registerTask("testswarm", function( commit, configFile ) {
    var test,
    testswarm = require( "testswarm" ),
    testBase = "http://uitesting.bgtpartners.com/git_projects/StarterProject", // Or set to your project's path
    testUrls = [],
    //config = grunt.file.readJSON( configFile );
    tests = { // TestName: TestFile.html
    };

    for (test in tests) {
      testUrls.push( testBase + tests[ test ] );
    }

    testswarm({
      url: "http://uitesting.bgtpartners.com/",
      pollInterval: 10000,
      done: this.async()
    }, {
      authUsername: '', // Your github username
      authToken: '', // Need a way to get this automatically. For now ask admin for it.
      jobName: '', // Set your Project Name
      runMax: 4,
      "runNames[]": Object.keys(tests),
      "runUrls[]": testUrls,
      "browserSets[]": ["main"] // Will check the four main browsers. currently IE9, Firefox 12, Chrome and Safari (Latest)
    });
  });

};