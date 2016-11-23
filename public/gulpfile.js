var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pkg = require('./package.json');

var paths = {
js: [
'/bower_components/jquery/dist/jquery.min.js',
'/bower_components/bootstrap/dist/js/bootstrap.min.js',
'/bower_components/angular/angular.min.js',
'/bower_components/angular-strap/dist/angular-strap.min.js',
'/bower_components/angular-strap/dist/angular-strap.tpl.js',
'/bower_components/angular-animate/angular-animate.min.js',
'/bower_components/angular-gm/angular-gm.js',
'/bower_components/angular-ui-grid/ui-grid.min.js',
'/bower_components/angular-touch/angular-touch.js',
'/app/bApp.js',
'/js/myJs.js'
]
};

gulp.task('uglify', function(){
gulp.src(paths.js)
.pipe(concat(pkg.name+'.js'))
.pipe(uglify())
.pipe(gulp.dest('/js/build'));
});
gulp.task('watch', function(){
gulp.watch(paths.js, ['uglify']);
});
gulp.task('default', ['uglify']);