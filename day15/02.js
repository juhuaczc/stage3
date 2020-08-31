{
    // 数组的解构赋值：
    // 按照对应的位置对变量进行赋值，需要等号两边的格式要保持一致,将右边的值给左边的变量
   /*  var a = 1; 
    var b = 2;
    var c = 3; */
    let[a,b,c] = [1,2,3]
    console.log(a,b,c)
}
{
    // 特殊格式: 左右两边格式不一致，
    // let [a,[b,c]] = [1,[2,3]]
    // let [a,b,c] =  [1,2]
    // let [a,b,c] = [1,[2,3]]
    // let [a,[b],c] = [1,2,3] 报错，左右两边格式不匹配
    // let [a,b,c] = [1,[2],3]
    let [a,b,[c,d]] = [1,[2,3],[4,5,6]]
    console.log(a,b,c,d)

}
{
    var a = 1,b = 2;
    /* var t = a;
    a = b
    b = t; */
    [a,b] = [b,a];
    console.log('a:',a)
    console.log('b:',b)
    
}
{
    function sendXHR(url,params){
        //......各种操作
        return [1,2,3]
    }
    // 可以先声明，然后再解构
    let a,b,c;
    [a,b,c] = sendXHR();
    console.log(a,b,c)
}

{
    // 解构赋值的默认值
    // 如果能够成功解构获取到值，则获取默认的初始值
    let [a=0,b=0,c=0] = [1,,2];
    console.log(a,b,c);
    // NaN和null会覆盖默认值，undefined不会覆盖默认值
    [a=0,b=0,c=0] = [NaN,undefined,null]
    console.log(a,b,c)
}

{
    // 扩展运算符，展开运算符 ...
    // 扩展运算符只能用在最后一个元素上
    let [a,b,...c] = [1,2,3,4,5,6,7,8,9]
    console.log(a,b,c)
    // 使用展开运算符复制数组
    let arr = [...c]
    console.log(arr)
    arr[0] = 100;
    // console.log(arr)
}