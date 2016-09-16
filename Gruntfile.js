module.exports = function(grunt) {

    grunt.initConfig({
        env: {
            prod: {
                NODE_ENV: 'production'
            }
        },
        browserify: {
            dist: {
                options: {
                    transform: [
                        ['babelify', {
                            presets: ['es2015', 'react']
                        }]
                    ],
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: ['src/js/**/*.js', 'src/js/*.js'],
                dest: 'dist/js/bundle.js'
            }
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true
                },
                files: {
                    'dist/js/bundle.min.js': ['dist/js/bundle.js']
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/css/main.css': 'src/sass/base.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'dist/css/main.css': 'dist/css/main.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/sass/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },
            scripts: {
                files: ['src/js/*.js', 'src/js/**/*.js'],
                tasks: ['browserify'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['env', 'sass', 'autoprefixer', 'browserify', 'uglify']);
}
