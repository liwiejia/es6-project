{
    //简洁表示法

    let o = 1;
    let k = 2;
    let es5 ={
        o:o,
        k:k
    };
    let es6 ={
        o,
        k
    }
    console.log(es5,es6);

    let es5_method ={
        hellow:function(){
            console.log('hellow');
        }
    }
    let es6_method ={
        hellow(){
            console.log('hellow');
        }
    }

    console.log(es5_method.hellow(),es6_method.hellow());
}
{
    //属性表达式
    let a = 'b';
    let es5_obj ={
        a:'c'
    };
    let es6_obj ={
        [a]:'c'
    }
    console.log(es5_obj,es6_obj);
}
{
    //常用新增API
    //1.判断两个值是否相等    和====没有区别
     console.log('字符串',Object.is('abc','abc'),'abc' === 'abc')

     console.log('数组',Object.is([],[]),[]===[]); // 输出false
     //** 数组是引用类型， 两个数组应用了不同地址

     //2.Objec 拷贝   拷贝是有限制的，前拷贝
     console.log("拷贝", Object.assign({a:'a'},{b:'b',c:'c'}));   //{a:'a'} 要拷贝到的对象上      {b:'b'}被拷贝对象

     //3.entries 得到下标和内容
     let test = {k:123,o:456};
     for(let [key,value] of Object.entries(test)){
         console.log([key,value])
     }

}
{
    //扩展运算符
    //let {a,b,...c} = {a:'test',b:'kill',c:'ddd',d:'ccc'};

    //c={
    //    c:'bbb',
    //    d:'ccc'
    //    ....
    //}
}