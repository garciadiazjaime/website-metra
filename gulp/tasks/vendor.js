var gulp = require("gulp");

gulp.task('vendor', function() {
    var concat = require('gulp-concat');
    // uglify = require('gulp-uglify');
    gulp.src([
            'node_modules/react/dist/react-with-addons.js',
            'node_modules/react-bootstrap/amd/react-bootstrap.js',
            'bower_components/axios/dist/axios.js'
        ])
        // .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('public'))
});
