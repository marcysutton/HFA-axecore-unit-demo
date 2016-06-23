module.exports = function (grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.initConfig({
		connect: {
	    server: {
	      options: {
	        port: 9001,
	        middleware: function(connect, options, middlewares) {
	        	middlewares.unshift(function(req, res, next) {
        			res.setHeader('Access-Control-Allow-Origin', '*');
        			res.setHeader('Access-Control-Allow-Methods', '*');
        			return next();
        		});
        		return middlewares;
	        }
	      }
	    }
	  },
		jasmine: {
			test: {
				src: ['node_modules/axe-core/axe.js'],
				options: {
					host: 'http://localhost:9001',
					specs: 'test/**/*.js',
					helpers: 'lib/custom-matchers.js',
					vendor: [
						'node_modules/jquery/dist/jquery.min.js',
						'node_modules/jasmine-jquery/lib/jasmine-jquery.js'
					]
				}
			}
		}
	});
	grunt.registerTask('test', ['connect', 'jasmine']);
};
