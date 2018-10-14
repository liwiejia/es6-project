{
    console.log('a',`\u0061`);

    console.log('s',`\u20BB7`); //会把\u20BB单独做一个字符  +7

    //es6中处理大于4个字符的Unicode
    console.log('s',`\u{20BB7}`);  // 用大括号包起来

   
}

{
    let s = '𠮷';

    
    console.log('length',s.lenth);   // 取出来的长度是2

    console.log('0:',s.charAt(0));   //取第一个字符
    console.log('0:',s.charAt(1));   //取第二个字符

    console.log('0:',s.charCodeAt(0));//取第一个字符Unicode编码值        值：55362
    console.log('0:',s.charCodeAt(1));//取第二个字符Unicode编码值        值：57271   
    
    //es6    let s1 = '𠮷a';
    console.log('length',s1.lenth);   // 取出来的长度是3

    console.log('code0:',s1.codePointAt(0));   //取第一个字符Unicode编码值 
    console.log('code0:',s1.codePointAt(0).toString(16));   //转成16进制

    console.log('code1:',s1.codePointAt(1).toString(16));   //取出 57271  
    console.log('code2:',s1.codePointAt(2).toString(16));   //取出97   a
}

{
    console.log(String.fromCharCode("0x20bb7"));//es5

    console.log(String.fromCodePoint("0x20bb7"));//es6

}

{
    //es5
    let str = '\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    //es6
    for(let code of str){
        console.log('es6',code);
    }
}
//lesson5
{
    let str = 'string';
    console.log('includes',str.includes('c'));   //判断字符串是否包含c

    console.log('start',str.startsWith("str")); // 判断字符串是否以str开始
    console.log('start',str.endsWith("ng"));    // 判断字符串是否以ng结束
}

{
    let str = "abc";
    console.log(str.repeat(2)); //把字符串重复两次
}
{
    //es6 模板字符串拼接
    let name ='list';
    let info = 'hellow world';
    let m = `i am ${name},${info}`;
    console.log(m);
}

{
    //向前补白，  比如字符串是1  需要补成01
    console.log('1'.padStart(2,'0'));//补白作用，  这个字符串必须是两位， 如果不够用0补齐，常用在补全日期，月份5，会变成05

    //向后补白，  比如字符串是1  需要补成10
    console.log('1'.padEnd(2,'0'));
}

{
    //标签模板    1.怎么用， 2.在哪里用
    let user={
        name:'list',
        info:'hellow world'
    }
    console.log(abc`i am ${user.name},${user.info}`);
    function abc(s,v1,v2){
        console.log(s,v1,v2); 
        return s+v1+v2;
    }

}
{
    console.log(String.raw`Hi\n${1+2}`);   //\n换行符不会生效，会在\转译称\\
    console.log(`Hi\n${1+2}`);
}