
var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	sass = require('gulp-sass'),
	//uncss = require('gulp-uncss'),
	connect = require('gulp-connect');

//server 
gulp.task('connect', function() {
  connect.server({
  	port: 8080,
  	 root: 'result',
    livereload: true
  });
});
//css
gulp.task('css', function () {
   gulp.src('scss/**/*.scss')
   	.pipe(sass())
   	//.pipe(uncss({
      //   html: ['result/index.html']
        //		}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('result/css'));
});

//html
gulp.task('html',function(){
	gulp.src('result/**/*.html')
	.pipe(connect.reload());
})
//watch
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['css'])
  gulp.watch('result/**/*.html', ['html'])
  gulp.watch('result/css/**/*.css',['html'])
});

//default
gulp.task('default',['connect','watch','html','css']);