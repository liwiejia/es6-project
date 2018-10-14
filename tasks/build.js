import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';//处理任务关联和顺序


gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));