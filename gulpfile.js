// const { src, dest, watch, task, series } = require('gulp')
// const sass = require('gulp-sass')
// const pug = require('gulp-pug')
// const browserSync = require('browser-sync').create()


// // complile scss into css
// function html() {
//   return src('./src/pug/**/*.pug')
//     .pipe(pug({
//       pretty: true
//     }))
//     .pipe(dest('./dist/'))
// }

// // complile scss into css
// function style() {
//   return src('./src/sass/**/*.scss')
//     .pipe(sass({
//       outputStyle: 'expanded'
//     }).on('error', sass.logError))
//     .pipe(dest('./dist/css/'))
//     .pipe(browserSync.stream())
// }

// function watchs() {
//   browserSync.init({
//     server: {
//       baseDir: './dist'
//     }
//   });
//   watch('./src/pug/*.pug', html)
//   watch('./src/sass/*.scss', style)
//   watch('./dist/*.html').on('change', browserSync.reload)
// }

// exports.html = html
// exports.style = style
// exports.watchs = watchs


const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const browsersync = require('browser-sync').create()

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browsersync.stream())
})

gulp.task('pug', () => {
  return gulp.src('./src/pug/**/*.pug')
    .pipe(pug({
      pretty: true,
      baseDir: false
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browsersync.stream())
})

gulp.task('default', () => {
  gulp.watch('./src/pug/**/*.pug', gulp.series('pug'))
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
  // gulp.watch('./dist/**/*.html', browsersync.reload)
  // gulp.watch('./dist/**/*.html').on('change', browsersync.reload)
  browsersync.init({
    server: {
      baseDir: './dist'
    }
  })
})





// var gulp = require('gulp');
// var pug = require('gulp-pug');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();


// // Compile pug files into HTML
// gulp.task('pug', function () {
//   return gulp.src('src/pug/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('dist'));
// });

// // Compile sass files into CSS
// gulp.task('sass', function () {
//   return gulp.src('src/sass/main.sass')
//     .pipe(sass({
//       includePaths: ['src/sass'],
//       errLogToConsole: true,
//       outputStyle: 'compressed',
//       onError: browserSync.notify
//     }))
//     .pipe(gulp.dest('dist/css'))
//     .pipe(browserSync.stream());
// });

// // Serve and watch sass/pug files for changes
// gulp.task('watch', ['pug', 'sass'], function () {
//   browserSync.init({
//       server: 'dist'
//   }),

//   gulp.watch('src/sass/**/*.sass', ['sass']);
//   gulp.watch('src/pug/*.pug', ['pug']);
//   gulp.watch('dist/*.html').on('change', browserSync.reload);
// });

// gulp.task('default', ['watch']);



// const { src, dest, task, watch, series } = require('gulp');
// const pug = require('gulp-pug');
// const sass = require('gulp-sass');
// const browserSync = require('browser-sync').create();

// Compile pug files into HTML

// const html = function html() {
//   return src('src/pug/*.pug')
//     .pipe(pug())
//     .pipe(dest('dist'));
// };

// task(html);

// const watcher = watch('src/pug/*.pug', ['pug']);

// watcher.on('change', function(path, stats) {
//   console.log('File ${path} was changed');
// })

// watcher.close();

// exports.build = parallel(pug2);

// var gulp = require('gulp');
// var sass = require('gulp-sass');
 
// // sass.compiler = require('node-sass');
 
// gulp.task('sass', function () {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
 
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

