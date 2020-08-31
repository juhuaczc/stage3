{
    // Array.from()
    // 将类数组对象转换为数组
    let lis = document.querySelectorAll('li');
    console.log(lis);
    let arr = Array.from(lis)
    console.log(arr)
    // 如果参数就是一个数组，则返回一个一模一样的数组
    let arr2 = Array.from([1,2,3])
    console.log(arr2)
}

{   // Array.of()

    let arr1 = new Array(1,2,3) //[1,2,3]
    let arr2 = new Array(4) //[,,,]
    let arr3 = Array.of(4) //[4]
    let arr4 = Array.of(1,2,3,4) //[1,2,3,4]
    let arr5 = Array.of() //[]

    /* console.log(arr1)
    console.log(arr2)
    console.log(arr3)
    console.log(arr4)
    console.log(arr5) */
}

{
    // find() findIndex()
    let arr = [1,2,3,4,5,6,7]
    let result = arr.find(function(val,index,a){
        // console.log(`${index}=====${val}`)
        // console.log(a)
        // 找到3的倍数
       /*  if(val%3==0){
            return val;
        } */
        return val%3==0;
    })
    console.log(`find方法：${result}`);
    result = arr.findIndex(function(val){
      // 找到3的倍数
      /* if(val%3==0){
        return val;
      } */
    })
    console.log(`findIndex方法：${result}`);
}

{
    let arr = [1,0,undefined,null,NaN,"",false];
    let result = arr.find(function(val){
      console.log(val)
      // Object.is(val1,val2)
      // 判断两个值是否相同
      return Object.is(NaN,val)
    })
    console.log(result);
}

{   
    // fill()
    let arr = new Array(6);
    console.log(arr)

    arr.fill(0); //[0,0,0,0,0,0]
    console.log(arr);
    arr.fill('');
    console.log(arr)//["", "", "", "", "", ""]

    // 第二个参数表示从哪个下表开始
    arr.fill('a',2) // 从下标2开始填充字符串啊，直到结束
    console.log(arr)//["", "", "a", "a", "a", "a"]

    // 第三个参数表示结束的小标
    // 从下标3开始到下标5结束(含头不含尾)
    arr.fill('b',3,5);
    console.log(arr);//["", "", "a", "b", "b", "a"]
}


















