//export 导出
/* export let A = 123;

export function test() {
    console.log('test');
}

export class Hello {
    test() {
        console.log('class');
    }
} */

// 第二种导出方法
let A = 123;
let test = function() {
    console.log
}
class Hello {
    test() {
        console.log('hello')
    }
}
export default {
    A,
    test,
    Hello
}