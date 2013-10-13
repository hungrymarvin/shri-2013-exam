module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        cssmin: {
            combine: {
                files: {
                    'css/compile.css': ['css/**/*.css']
                }
            },
            add_banner: {
                options: {
                    banner: '/* SHRI Exam */'
                },
                files: {
                    'css/compile.css': ['css/compile.css']
                }
            },
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['compile.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        },

        watch: {
            files: ['css/*.css'],
            jasmine: {
                files: ['css/*.css'],
                tasks: ['cssmin']
            },
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
        grunt.registerTask('default', ['cssmin', 'watch']);

};



