import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';


//gulp.task 创建任务
//读取app 目录下所有css
//移动到server/public目录下
gulp.task('css',()=>{
    return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))
    //.pipe(gulpif(args.watch,livereload())) 
})