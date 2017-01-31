var gulp = require('gulp'),
watch = require('gulp-watch'),
browsersync = require('browser-sync').create();

// Watch task - keep running and do things on the fly
gulp.task('watch', function(){

    browsersync.init({
        notify: false, // Popup message bei Injection soll nicht angezeigt werden 
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function() {
        browsersync.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssinject');
    });

    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });
});

// css injection is cool! No browser refresh!
// 2.Param sind die Dependencies. Sie werden vor dem Inject gestartet
gulp.task('cssinject', ['styles'] , function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browsersync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browsersync.reload();
});
