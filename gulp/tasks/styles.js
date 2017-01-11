var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
browsersync = require('browser-sync').create();

// Styles processing
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'))
});

// css injection is cool! No browser refresh!
// 2.Param sind die Dependencies. Sie werden vor dem Inject gestartet
gulp.task('cssinject', ['styles'] , function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browsersync.stream());
});