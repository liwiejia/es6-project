{
    //数据横向对比，增，删，改，查
    let map =new Map();
    let array = [];

    //增
    map.set('t',1);
    array.push({t:1});

    console.info('map-array',map,array);

    //查
    let map_exist = map.has('t');                //如果存在 返回true，否则返回false

    let array_exist = array.find(item=>item.t);  //如果存在则返回当前的值得对象

    console.info('map-array',map_exist,array_exist);

    //改
    map.set('t',2);

    array.forEach(item=>item.t?item.t=2:'');
    console.info('map-array-modfiy',map,array);

    //删
    map.delete('t');

    let index = array.findIndex(item=>item.t);
    array.splice(index,1);

    console.info('map-array-empty',map,array);

}
{
    //set 和数组的对比

    let set = new Set();
    let array = [];

    //增
    set.add({t:1});
    array.push({t:1});

    console.info('set-array',set,array);

    //查
    let set_exist = set.has({t:1});   // 返回false
    let array_exist = array.find(item=>item.t);

    console.info('map-array',set_exist,array_exist);

    //改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.info('set-array-modify',set,array);

    //删
    set.forEach(item=>item.t?set.delete(item):'');

    let index = array.findIndex(item=>item.t);
    array.splice(index,1);

    console.log('set-array-empty',set,array)

}
{
    //map set objec 对比
    let item = {t:1};
    let set = new Set();
    let map = new Map();
    let obj = {};

    //增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;

    console.info('map-set-object',set,map,obj);

    //查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    })

    //改
    map.set('t',2);
    item.t = 2;
    obj['t'] = 2;
    console.info('map-set-obj-modify',obj,map,set);

    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];

    console.info('map-set-obj-delete',obj,map,set)

    

    //在数据开发中，能使用map 不适用数组
    //如果考虑对于数据的唯一性使用set

}