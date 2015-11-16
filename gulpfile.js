var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('app', function() {
    return gulp.src(['./src/app/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./src/dist/'));
});

gulp.task('lib', function() {
    return gulp.src(['vendor/jquery-2.1.4.min.js','vendor/system.src.js','vendor/angular2.dev.js','vendor/firebase.js','vendor/chartist.js','vendor/materialize.js'])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./src/dist/'));
});

gulp.task('css',function(){
    return gulp.src(['./src/css/style.css', 'vendor/materialize.css', 'vendor/chartist.min.css' ])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./src/dist/'));
});

gulp.task('default', ['app','lib', 'css']);