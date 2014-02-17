module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
    	uglify: {
    		my_target: {
        		files: {
          			'asset/js/script.js': ['asset/components/js/*.js']
        		} //files
     		 } //my_target
   		 }, 

   		compass:{
   			dev:{
   				options:{
   					config:'config.rb'
   				}//options
   			}//dev
   		},//compass

	    watch: {
		    options: { livereload: true },
		    scripts: {
		    	files: ['asset/components/js/*.js'],
		    	tasks: ['uglify']
		    }, //script
		    sass: {
		        files: ['asset/components/sass/*.scss'],
		        tasks: ['compass:dev']//when the files change, what task should be executed?
		    }, //sass
		    html: {
		        files: ['*.html']
		    }
	    } //watch
  }) //initConfig
  grunt.registerTask('default', 'watch');
} //exports