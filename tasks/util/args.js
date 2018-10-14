import yargs from 'yargs';//处理命令行参数


const args = yargs

    //区分开发环境和线上环境
    .option('production',{
        boolean:true,   
        default:false, //默认值 false 开发环境
        describe:'min all scripts'
    })

    //修改文件后是否自动编译
    .option('watch',{
        boolean:true,
        default:false,
        describe:'watch all files'
    })

    //命令行是否输出详细日志
    .option('verbose',{
        boolean:true,
        default:false,
        describe:'log'
    })

    .option('sourcemaps',{
        describe:'force the creation of sroucemaps'
    })

    .option('port',{
        string:true,
        default:8080,
        describe:'server port'
    })

    .argv

export default args;
