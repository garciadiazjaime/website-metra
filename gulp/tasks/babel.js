'use strict';

var gulp = require('gulp');
var chalk = require('chalk');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var changed = require('gulp-changed');
var react = require('gulp-react');

function babelTask(){
  return gulp.src('src/**/*.js*')
    // .pipe(changed('build/'))
    .pipe(babel())
      .on('error', function(err){
        gutil.log(chalk.red('Error during babel transpile in ') + chalk.green(err.fileName));
        console.log(err.codeFrame);
      })
    .pipe(gulp.dest('build/'))
    .on('end', function(){
      // gutil.log('Babel Complete');
    });
}

gulp.task('babel', babelTask);

