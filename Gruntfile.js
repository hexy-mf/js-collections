require("babel-polyfill");
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-qunit-istanbul');
    grunt.loadNpmTasks('grunt-babel');
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'dist/collections.js',
                dest: 'dist/collections.min.js'
            }
        },
        concat: {
            build: {
                src: 'src/*.js',
                dest: 'build/collections.js'
            }
        },
        qunit: {
            options : {
                '--web-security': 'no',
                coverage: {
                    src: [ "dist/collections.js"],
                    instrumentedFiles: 'temp/',
                    htmlReport: "test/coverage"
                }
            },
            build: ["test/*.html"]
        },
        babel: {
            build: {
                sourceMap: true,
                presets: ['env'],
                files: {
                    'dist/collections.js' : 'build/collections.js',
                    'test/linked-list-test.es5.js' : "test/linked-list-test.js"
                }
            }
        }
    });
    grunt.registerTask('default', ['concat','babel','uglify','qunit'] );
    
};
