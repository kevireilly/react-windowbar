module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: './src',
					cssDir: './dist',
					outputStyle: 'compressed'
				}
			}
		},
		browserify: {
			options: {
				debug: true,
				transform: ['babelify'],
				extensions: ['.jsx'],
				browserifyOptions: {
					standalone: 'Windowbar'
				}
			},
			default: {
				files: {
					'demo/demo.js': 'src/demo.jsx'
				}
			}
		},
		babel: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'dist/Windowbar.js': 'src/Windowbar.jsx',
					'dist/index.js': 'src/index.jsx'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			},
			browserify: {
				files: ['src/demo.js','demo/index.html'],
				tasks: ['browserify']
			},
			babel: {
				files: ['src/*.jsx?'],
				tasks: ['babel']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
