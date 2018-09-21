const gulp = require('gulp')
const prop = require('./package.json');
const sass = require('gulp-sass')
const miniFyCSS = require('gulp-clean-css')
const gRename = require('gulp-rename')
const concat = require('gulp-concat')
const autoPrefixer = require('gulp-autoprefixer')
const gHeader = require('gulp-header')
const gSize = require('gulp-size')
const gWait = require('gulp-wait')
const headTitle = `\/*\r\n* ${prop.name} ${prop.version} \r\n* ${new Date()} \r\n* ${prop.description} \r\n*/\r\n`;

const assetsPath = 'assets/'
const folderPath = {
  cssFolder: `${assetsPath}css/`,
  cssPagesFolder: `${assetsPath}css/pages`,
  cssMainName: 'styles.min.css',
  scssAll: `${assetsPath}scss/*.scss`,
  scssPagesAll: `${assetsPath}scss/pages/**/*.scss`,
  scssPagesFolder: `${assetsPath}scss/pages/`,
  scssFolder: `${assetsPath}scss/`,
}

const autoPrefixerOption = {
  browsers: ['last 2 versions'],
  cascade: false
}

const miniFyOption = {
  level: {
    1: {
      all: true,
      normalizeUrls: false
    },
    2: {
      restructureRules: true
    }
  }
}

const miniFyFunction = (details, minName = details.name) => {
  console.log(`${details.name} : ${details.stats.originalSize}`)
  console.log(`${minName} : ${details.stats.minifiedSize} .minFile`)
}

gulp.task('sassAll', () => {
  gulp.src(folderPath.scssAll)
    // .pipe(gWait(500))
    .pipe(sass({
      style: 'compressed'
    }))
    .pipe(autoPrefixer(autoPrefixerOption))
    .pipe(miniFyCSS(miniFyOption, details => miniFyFunction(details)))
    .pipe(gHeader(headTitle))
    .pipe(concat(folderPath.cssMainName))
    .pipe(gSize())
    .pipe(gulp.dest(folderPath.cssFolder))
})

gulp.task('sassPage', () => {
  gulp.src(folderPath.scssPagesAll)
    .pipe(gWait(500))
    .pipe(sass({
      style: 'compressed'
    }))
    .pipe(autoPrefixer(autoPrefixerOption))
    .pipe(miniFyCSS(miniFyOption, details => miniFyFunction(details)))
    .pipe(gHeader(headTitle))
    .pipe(gRename({
      suffix: '.min'
    }))
    .pipe(gSize())
    // .pipe(miniFyCSS())
    .pipe(gulp.dest(folderPath.cssPagesFolder))
})

gulp.task('default', ['sassAll', 'sassPage'], () => {
  gulp.watch(folderPath.scssFolder + '**/*.scss', ['sassAll'])
  gulp.watch(folderPath.scssPagesFolder + '**/*.scss', ['sassPage'])
})