const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports =  function img() {
    return src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'));
}