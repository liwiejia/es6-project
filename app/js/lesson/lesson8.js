{
    //函数参数默认值
    function test(x,y ='world'){
        console.log('默认值',x,y)
    }
    test('hellow')
    test('hellow','kill')

    //** 默认值后面 不能再有没有默认值的变量比如 test(x,y='world',c)  但是这样是可以的 test(x,y='word',c='555')
}
{
    //函数作用域
    let x ='test';
    function test2(x,y=x){
        console.log('作用域',x,y)  //输出 kill kill
    }
    test2('kill')

    function test3(q,y=x){
        console.log('作用域',q,y)  //输出 kill test
    }
    test3('kill')
   
    //若(x,y=x)  有定义x  则x获取（x），  若（q,x）没有定义x 则x取let x  
}
{
    //rest 的参数
    function test4(...arg){
        for(let v of arg){
            console.log('rest',v)
        }
    }
    test4(1,2,3,4,'a')
    //把输入的参数都生成数组
    //rest 之后不要有第二个参数
}
{
    //扩展用算符
    console.log('扩展用算符',...[1,2,4])

    //...+数组   则是把数组转成零散的值，    ...+零散的值  则是把零散的值转成数组
    
}
{
   //箭头函数
   let arrow = v => v*2;
   // 函数名 = 参数 => 返回值
   let arrow2 = ()=> 5;
   // 函数名 = 参数 若没有参数用() => 返回值

   console.log('arrow',arrow(3))
   console.log('arrow2',arrow2())
   //箭头函数一定要注意this特新的关系
}
{
    //尾调用（函数是编程，函数的最后一句话是否是函数）
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x)
    }

    fx(123)

    //尾调用 提升性能
}