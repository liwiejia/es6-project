{
    let obj ={
        time:'2017-03-11',
        name:'net',
        _r:123
    }

    let monitor = new Proxy(obj,{
        //拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018')
        },
        //拦截对象设置属性
        set(target,key,value){  //target指obj这个对象， key==》要修改的属性  value====》要修改的值
            if(key === 'name'){
                return target[key] = value;
            }else{
                return target[key];
            } 
        },
        //拦截key in objec  一个key是否在对象中
        has(target,key){
            if(key === 'name'){
                return target[key];
            }else{
                return false;
            }
        },
        //拦截删除属性
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else{
                return target[key];
            }
        },
        //拦截Object.keys，object.getOwnPropertySymbols，Object.getOwnPropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time')
        }
    })

    console.log('get',monitor.time);
    monitor.time = '2018'
    monitor.name = 'liweijia'
    console.log('set',monitor.time,monitor);

    console.log('has','name' in monitor,'time' in monitor);

    delete module.time;
    console.log('delete_time',monitor);

    delete monitor._r;
    console.log('delete_ _r',monitor)

    console.log('ownKeys',Object.keys(monitor))
}
{
    //Reflect 方法以及用法和Proxy一样
    let obj ={
        time:'2017-03-11',
        name:'net',
        _r:123
    };
    console.log('Reflect get',Reflect.get(obj,'time'));
    Reflect.set(obj,'name','liweijia')
    console.log(obj);
    console.log('has',Reflect.has(obj,'name'));
}
{
    //用例：数据校验
    function validator(target,validator){    //target 目标   validator验证器
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                let va = this._validator[key];
                if(target.hasOwnProperty(key)){
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy)
                    }else{
                        throw Error(`不能设置${key}到${value}`)
                    }
                }else{
                    throw Error(`${key} 不存在`)
                }
                
            }
        })
    }

    const personValidators = {
        name(val){
            return typeof val ==='string'
        },
        age(val){
            return typeof val ==='number' && val >18
        }
    }
    class Person{
        constructor(name,age){   //constructor构造函数
            this.name = name;
            this.age = age;
            return validator(this,personValidators)  //personValidators  个人验证器
        }
    }

    const person = new Person('liweijia',20);

    console.log(person);

    person.name = 48;
}