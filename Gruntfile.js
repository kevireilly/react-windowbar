module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: '.',
					cssDir: '.'
				}
			}
		},
		browserify: {
			options: {
				debug: true,
				// transform: ['babelify'],
				transform: [
					'brfs'
				],
				extensions: '.js',
				browserifyOptions: {
					standalone: 'windowbar'
				}
			},
			default: {
				src: ['index.js'],
				dest: 'demo/index.js'
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			},
			browserify: {
				files: ['./*.js','./*.html'],
				tasks: ['browserify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
