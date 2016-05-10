module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: {
                    'dest/output.min.js': ['app/app.component.js','app/main.js','systemjs.config.js','node_modules/systemjs/dist/system.src.js','node_modules/reflect-metadata/Reflect.js','node_modules/zone.js/dist/zone.js'],
                }
            }
        },
        cssmin: {
            build: {
                src: 'styles.css',
                dest: 'styles.min.css'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Default task(s).
    grunt.registerTask('default', ['uglify','cssmin']);

};