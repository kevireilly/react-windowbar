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
				files: { 'dist/index.js': ['src/index.jsx'] }
			},
			demo: {
				files: { 'demo/demo.js': ['demo/demo.jsx'] }
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			},
			browserify: {
				files: ['**/*.jsx?','**/*.html'],
				tasks: ['browserify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
