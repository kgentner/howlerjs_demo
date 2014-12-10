'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    jshint: {
      all: ['server.js', 'Gruntfile.js', 'test/client/*.js', 'test/server/*.js',
      'app/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['server.js', 'Gruntfile.js', 'test/client/*.js', 'test/server/*.js',
      'app/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'css/**/*.css', 'assets/sounds/*.mp3',
        'assets/sounds/*.ogg', 'assets/sounds/*.wav', 'assets/images/*.png'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    }
  });
  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('default', ['build:dev', 'test']);
};
//
