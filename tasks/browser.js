import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';//gulp 常用工具，函数和
import args from './util/args';

 //app目录下原始js，ejs，css发生变化后执行 
 gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts']);//js发生变化执行 script
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
});
