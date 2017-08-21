'use strict';
var gulp = require('gulp');
gulp.task('styles', function () {
  return gulp.src('example/styles/main.css')
    .pipe(gulp.dest('.tmp/styles'));
});
gulp.task('connect', ['styles'], function () {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(serveStatic('.tmp'))
    .use(serveStatic('example'))
    .use(serveStatic('src'))
    .use(serveIndex('example'));

  require('http').createServer(app)
    .listen(3001)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});


gulp.task('serve', ['connect'], function () {
  require('opn')('http://localhost:3001');
});
