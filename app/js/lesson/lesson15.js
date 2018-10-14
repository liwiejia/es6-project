import { Promise } from "core-js";

{
    //es5 基本定义
    let ajax = function(callback){
        console.log('执行');
        setTimeout(function (){
            callback && callback.call();
        },1000);
    };
    ajax(function(){
        console.log('timeout1');
    });
}

{
    let ajax = function(){
        console.log('执行2');
        return new Promise((resolve, reject) => {  //resolve 决定  reject 拒绝
            setTimeout(function () {
                resolve();
            },1000)    
        });
    };

    ajax().then(function () {    //.then(function(){},function(){})   第一个函数对应resolve  第二个函数对应reject
        console.log('Promise','timeout2');
               
    });
}
{
    //实战1
    let ajax = function(){
        console.log('执行3');
        return new Promise((resolve, reject) => {  //resolve 决定  reject 拒绝
            setTimeout(function () {
                resolve();
            },1000)    
        });
    };
    ajax()
        .then(function(){
            return new Promise((resolve, reject) => {
                setTimeout(function(){
                    resolve();
                },2000);
            });
        })
        .then(function(){
            console.log('timeout3')
        })
}
{ //Promise捕获异常错误
   let ajax=function (num) {
       console.log('执行4');
       return new Promise(function(resolve,reject){
            if(num>5){
                resolve();
            }else{
                throw new Error('出错了')
            }
       });
   }; 
   ajax(6).then(function(){
       console.log('log',6);
   }).catch(function(err){
       console.log('catch',err);
   });
   ajax(3).then(function(){
    console.log('log',3);
   }).catch(function(err){
       console.log('catch',err);
   });
}
{
    //常用场景
    //所有图片都加载完再添加页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(err){
                reject(err);
            };
        });
    }

    function showImgs(imgs){
        imgs.forEach(img => {
            document.body.appendChild(img);
        });
    }
    Promise.all([
        loadImg('https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=fb120f6ee5dde711e3d244f497eecef4/960a304e251f95caffb82dddc9177f3e6709520f.jpg'),
        loadImg('https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=c1e7b51388cb39dbc5c06054e01709a7/728da9773912b31bac721cd08f18367adab4e129.jpg'),
        loadImg('https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=fba37d9ac9fdfc03e178e4bae43e87a9/aec379310a55b319d89b091149a98226cffc1777.jpg'),
    ]).then(showImgs)
}
{
    //有一个图片加载完就添加页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(err){
                reject(err);
            };
        });
    }
    function showImgs(img){
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }
    Promise.race([
        loadImg('https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=fb120f6ee5dde711e3d244f497eecef4/960a304e251f95caffb82dddc9177f3e6709520f.jpg'),
        loadImg('https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=c1e7b51388cb39dbc5c06054e01709a7/728da9773912b31bac721cd08f18367adab4e1129.jpg'),
        loadImg('https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=fba37d9ac9fdfc03e178e4bae43e87a9/aec379310a55b319d89b091149a98226cffc11777.jpg'),
    ]).then(showImgs);
}