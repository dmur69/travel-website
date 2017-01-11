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

    watch('./app/assets//**/*.css', function() {
        gulp.start('cssinject');
    });
});
