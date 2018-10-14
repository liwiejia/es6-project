import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js']) //使用api 打开文件
        .pipe(plumber({                 //集中处理错误
            errorHandle:function(){ 

            }
        }))
        .pipe(named())                  //文件重命名
        .pipe(gulpWebpack({             //js编译
            module:{
                loaders:[{
                     test:/\.js$/,
                    loader:'babel'
                }]
            }
        }),null,(err,stats)=>{
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}})) //压缩
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))
})