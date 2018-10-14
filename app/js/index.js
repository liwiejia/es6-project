//整个项目大入口文件

//es6兼容处理
import 'babel-polyfill';
//彩种处理
import Lottery from './lottery';

const syy = new Lottery();
console.log(syy);