const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-html-minifier-terser')
const htmlclean = require('gulp-htmlclean')

// babel(如果不是使用bebel,把下面两行注释掉)
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

// 压缩js
gulp.task('compress', () =>
  gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify().on('error', function (e) {
      console.error(e)
    }))
    .pipe(gulp.dest('./public'))
)

// minify js - gulp-tester (如果使用 gulp-tester,把下面前面的//去掉)
// gulp.task('compress', () =>
//   gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
//     .pipe(terser())
//     .pipe(gulp.dest('./public'))
// )

// 压缩public目录内 html
gulp.task('minify-html', () => {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
      removeComments: true, // 清除 HTML 註释
      collapseWhitespace: true, // 压缩 HTML
      collapseBooleanAttributes: true, // 省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true, // 删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true, // 删除 <script> 的 type="text/javascript"
      removeStyleLinkTypeAttributes: true, // 删除 <style> 和 <link> 的 type="text/css"
      minifyJS: true, // 压缩页面 JS
      minifyCSS: true, // 压缩页面 CSS
      minifyURLs: true // 压缩页面 URL
    }))
    .pipe(gulp.dest('./public'))
})

// v3版本语法，执行gulp命令时执行的任务
//gulp.task('default', gulp.parallel('compress', 'minify-css', 'minify-html', 'minify-images'))

// gulp 4.0.2新语法
gulp.task('default', gulp.series('compress', 'minify-html'))