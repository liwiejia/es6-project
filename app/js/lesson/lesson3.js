{
    //es5
    let regex = new RegExp('xyz','i');  //  i就是忽略大小写  两个参数
    let regex2 = new RegExp(/xyz/i);  //  一个参数

    console.log(regex.test('xyz123'),regex2.test('xyz123'));        //输出两个true

    //es6
    let regex3 = new RegExp(/xyz/ig,'i'); //可以是两个参数
    console.log(regex3.flags);             //输出 i     第二个参数i  会覆盖正则表达式中的修饰符

}

{
    let s= 'bbbbb_bb_b';

    let a1 = /b+/g; //es5常用写法
    let a2 = /b+/y; //es6写法

    console.log('one',a1.exec(s),a2.exec(s)); //bbb | bbb              g忽略了_
    console.log('two',a1.exec(s),a2.exec(s)); //bb | null              y必须匹配下一个字符

    //g和y都是全局匹配   
    //但是不同点 g不强调是否必须是下一个字符_  会一直匹配下去。  y则必须强调是下一个字符_  所以没有匹配到 返回null

    console.log(a1.sticky,a2.sticky);// sticky  es6 新增加  就是判断正则对象是否使用带y的匹配模式            输出：false  |   true

}

{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));   //true     会把\uD83D\UDC2A 理解成两个字符
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));  //false      \uD83D\UDC2A；理解成一个字符  

    console.log(/\u{61}/.test('a'));            //false
    console.log(/\u{61}/u.test('a'));           //true 

    console.log(`\u{20BB7}`);

    let s= '𠮷';

    console.log('u',/^.$/.test(s));               // 输出  false；   .只能配置2个字节长度的任意字符
    console.log('u-2',/^.$/u.test(s));              //输出ture         u修饰符可以匹配任意字符长度

    console.log('test',/𠮷{2}/.test('𠮷𠮷'));     //输出 false
    console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));     //输出 true 
}