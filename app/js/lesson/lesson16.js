{
    //数组可以直接用Symbol.iterator
    let arr = ['hello','world'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}
{
    //object 如果需要遍历，需要自己定义Symbol.iterator
    let obj={
        start:[1,3,2],
        end:[7,9,8,],
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return{
                next(){
                    if(index<len){
                        return{
                            value:arr[index++],
                            done:false   //false 说明还有内容
                        }
                    }else{
                        return {
                            value:arr[index++],
                            done:true    //true 说明已经没有内容了
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key);
    }
}

{
    let arr = ['hello','world'];
    for(let value of arr){
        console.log('value',value);
    }  
}