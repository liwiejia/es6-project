{
    //声明set 变量
    let list = new Set();
    list.add(5);    //用add增加元素
    list.add(7);

    console.log('size', list.size);// 获取list的长度  等同于 .length
}
{
    //另外一种声明方式  并且赋值
    let arr = [1,2,3,4,5];
    let list = new Set(arr);

    console.log('size', list.size);// 获取list的长度  等同于 .length
}

{
    //set 数据类型的元素必须是唯一的
    let list = new Set();

    list.add(1);
    list.add(2);
    list.add(1);  //重复的元素生效，但也不会报错， 可以用于去重，  比如吧数组去重
    console.log('list', list);

    let arr = [1,2,3,1,'2'];
    let list2 = new Set(arr);
    console.log('list2', list2);   //不会去重数据类型不同的    比如数字2  和字符串 2 不是相同的
}
{
    //set 的事例方法                  add 添加 delete删除  clear清空   has 是否包含
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    console.log('has',list.has('add'));
    console.log('delete', list.delete('add'),list);
    list.clear();

    console.log('list',list);
}
{
    //Set 的遍历
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);

    for(let key of list.keys()){
        console.log('keys',key);
    }

    for(let values of list.values()){
        console.log('values',values);
    }
    for(let values of list){
        console.log('values111:',values);
    }
    for(let [key,values] of list.entries()){
        console.log('values111:',key,values);
    }

    list.forEach(function(item){
        console.log('item',item)
    })
}
{
    //WeakSet    1.WeakSet和Set支持的数据类型不一样(WeakSet的数值只能是对象，不能是数值等等)   2.WeakSet是弱引用对象，不会检测这个对象是否在其他地方用过，WeakSet不是把值拷贝过来，而是引用地址
    let weakList = new WeakSet();

    let arg ={};
    weakList.add(arg);
   // weakList.add(2);  会出错  只能是对象
   //没有 clear方法，没有size属性，不能遍历
   //可以用has add delete 和set一样

    console.log('weakList',weakList);
}

{
    //map 定义方法1
    let map = new Map();

    let arr = ['123'];
    //map 的key 可以是任意数据类型
    map.set(arr,456)  // map添加属性是用set   set添加属性是用add

    console.log('map',map,map.get(arr));  //用.get 获取key
}
{
    //map 定义方法2
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map);
    console.log('size ',map.size)
    //get  和 set中的get一样

    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);

    //遍历和set 一样
}
{
    //weakmap   和set，setmap区别一样
    let weakmap = new WeakMap();

    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));
}