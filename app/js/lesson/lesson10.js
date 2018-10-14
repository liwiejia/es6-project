{
    //声明Symbol
    let a1  = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2)    //Symbol声明的变量是独一无二的

    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3 === a4) 

   
}
 //Symbol作用
 {
     let a1 = Symbol.for('abc');
     let obj = {
         [a1]:'123',
         'abc':456,
         'c':456
     };
     console.log('obk',obj)

     for(let [key,value] of Object.entries(obj)){
         console.log('let of',key,value)//这里取不到Symbol 定义的值
     }

     //使用Symbol API来取Symbol定义的值（只能拿到Symbol）

     Object.getOwnPropertySymbols(obj).forEach(function(item){      
            console.log(obj[item])
     })


     //可以拿到Symbol定义和非Symbol定义的值
     Reflect.ownKeys(obj).forEach(function(item){
         console.log('ownkeys',item , obj[item])
     })
 }