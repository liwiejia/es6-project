import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//启动服务器包
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();

    //创建服务器
    var server = liveserver.new(['--harmony','server/bin/www']);
    //启动服务器
    server.start();

    //目录下的js，ejs若有改动，自动刷新
    //gulp.watch 文件监听
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        //通知服务器去做处理
        server.notify.apply(server,[file]);
    });


    //若接口，路由发生变化
    //重启服务器
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)();
    });
})
