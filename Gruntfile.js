/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '<%= banner %>',
                separator: ';'
            },
            dist: {
                files: {
                    'js/app.min.js':['js/app.js']
                }
            }
        },
        jshint: {
            files:['Gruntfile.js', 'app.js']
        },
        cssmin: {
            css: {
                files: {
                    'css/main.min.css': ['css/main.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint', 'cssmin', 'uglify']);

};