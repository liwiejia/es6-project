{
    //一组数据变量转换成数据类型的作用Array.of 
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=',arr)

    //如果没有指定变量 则返回空数组
    let empty = Array.of();
    console.log('empty=',empty);
}
{
    //把伪数组，或者集合转换成数组
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent);
    });

    //Array.from映射 
    console.log(Array.from([1,3,5],function(item){return item*2}));
}
{
    //填充数组
    console.log('file-7',[1,'a',undefined].fill(7));   //所有都会变成7
    console.log('fill,pos',['a','b','b','d'].fill(7,1,3));  //   7表示变成7    1位置表示从1开始， 3表示到位置3结束
}
{
    //keys 返回数组下标
    for(let index of ['1','c','ks'].keys()){
        console.log('keys',index);
    }
    //values 返回数组内容
    for(let values of ['1','c','ks'].values()){
        console.log('values',values);
    }
    //entries 得到下标和内容
    for(let [index,values] of ['1','c','ks'].entries()){
        console.log('values',index,values);
    }
}
{
   //
   console.log([1,2,3,4,5].copyWithin(0,3,5));    //  0 ==> 从哪个位置开始替换，  3 ==>从哪个位置读取数据。  4 ====> 从哪个位置截止
}
{
    //查找一个元素是否在一个数组中  
    console.log([1,2,3,4,5,6].find(function(item){ return item>3}));  // find 只找出第一个
    console.log([1,2,3,4,5,6].findIndex(function(item){ return item>3}));  // 放回当前第一个符合元素的下标  只找出第一个
}
{
    //和find 一差不多 。解决了NaN
    console.log('number',[1,2,NaN].includes(1));  // 数组中是否包含1   返回true / false
    console.log('NaN',[1,2,NaN].includes(NaN));  // 数组中是否包含1   返回true / false

}