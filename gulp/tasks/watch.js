var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');


function watchTask(){
	return gulp.watch('src/**/*.js*', ['compile']);
}

gulp.task('watch', ['build'], watchTask);

gulp.task('compile', function(callback) {
    var runSequence = require('run-sequence');
    runSequence(
    		'babel',
				'reactify',
				callback);
});
