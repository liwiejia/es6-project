import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
    //路径 **/*.ejs 表示所有ejs文件 包括嵌套目录
    //模板文件全部拷贝到server目录
    //监听是否要更新
    return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))  
    .pipe(gulpif(args.watch,livereload())) 
})