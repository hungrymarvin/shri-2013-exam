module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        cssmin: {
            combine: {
                files: {
                    'css/compiled/compile.css': ['css/*.css']
                }
            },
            add_banner: {
                options: {
                    banner: '/* SHRI Exam */'
                },
                files: {
                    'css/compiled/compile.css': ['css/compiled/compile.css']
                }
            },
            minify: {
                expand: true,
                cwd: 'css/compiled/',
                src: ['compile.css'],
                dest: 'assets/',
                ext: '.min.css'
            }
        },
        uglify: {
            minify: {
                files: {
                    'assets/compile.min.js': ['js/application.js']
                }
            }
        },

        watch: {
            files: ['css/*.css', 'js/application.js'],
            cssmin: {
                files: ['css/*.css'],
                tasks: ['cssmin']
            },
            uglify:{
                files: ['js/application.js'],
                tasks: ['uglify']
            },
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
        grunt.registerTask('default', ['cssmin', 'watch', 'uglify']);

};



