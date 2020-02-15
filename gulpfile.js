const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const sorting = require('postcss-sorting');
const autoprefixer = require('autoprefixer');
// const nano = require('cssnano');

gulp.task('css', () => {
  return gulp.src('./src/*.css').pipe(
    postcss([
      postcssPresetEnv({
        stage: 3,
        features: {
          'nesting-rules': true
        }
      }),
      sorting({
        'order': [
          'custom-properties',
          'declarations',
          'at-rules',
          'rules'
        ],
        "properties-order": [
          "font",
          "color",
          "margin",
          "padding",
          "border",
          "background"
        ],
        'unspecified-properties-position': 'bottom'
      }),
      autoprefixer(/* no options needed*/)
      // ,
      // nano(/* pluginOptions */)
    ])
  ).pipe(
    gulp.dest('./dist/css')
  )
});
