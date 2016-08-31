module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            'build/js/main.min.js': 'src/js/main.js',
        },
		sass: {
			options: {
				style: 'compressed',

			},
			dist: {
				files: {
				'build/css/style.min.css' : 'src/sass/style.scss',
				'build/css/bootstrap.min.css' : 'src/sass/bootstrap.scss'
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					html5: true,

				},
				files: {
					'build/index.html': 'src/index.html',
				}
			},
		},
		watch: {
			js: {
				files: 'src/js/*.js',
				tasks: ['uglify']
			},
			css: {
				files: 'src/sass/*.scss',
				tasks: ['sass']
			},
			html: {
				files: 'src/*.html',
				tasks: ['htmlmin']
			}
		}
    });
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('watch', ['watch']);
	grunt.registerTask('default', ['uglify', 'sass', 'htmlmin']);
};