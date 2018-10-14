{
    console.log(0b111110111);//0b 代表二进制           b不区分大小写

    console.log(0o767) //0o表示8进制              o不区分大小写
}
{
    //Number.isFinite   表示这个值是否在有效内，是否无穷大
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));  // false
    console.log('1/0',Number.isFinite(1/0));  // false
    //Number.isNaN 判断是否是数字
    console.log('NaN',Number.isNaN(NaN));//输出true
    console.log('0',Number.isNaN(0));//输出false

}
{
    //判断是否是整数
    console.log('25',Number.isInteger(25));  // true
    console.log('25.0',Number.isInteger(25.0));  // true
    console.log('25.1',Number.isInteger(25.1));  // true
    console.log('字符串25',Number.isInteger('25'));  // false
}
{
    //判断一个数是否在 -2的53次方   2的53次方

    console.log(Number.MAX_SAFE_INTEGER) //最大数值
    console.log(Number.MIN_SAFE_INTEGER) //最大数值

    console.log('10:',Number.isSafeInteger(10));//判断这个数是数
    console.log('A:',Number.isSafeInteger('A')); //判断这个数是否在有效内   FALSE   
}
{
    //Math.trunc  取整
    console.log(4.1,Math.trunc(4.1));
    console.log(4.9,Math.trunc(4.9));
}
{
    //判断一个数是正数，负数还是0                       正数 1  负数 -1  0==》0   非数 NaN
    console.log(-5,Math.sign(-5));
    console.log(5,Math.sign(5));
    console.log(0,Math.sign(0));

    console.log('字符串 50',Math.sign('50'));
    console.log('字符串',Math.sign('字符串'));
}
{
    //立方根
    console.log(-1,Math.cbrt(-1));
    console.log(8,Math.cbrt(8));
}
