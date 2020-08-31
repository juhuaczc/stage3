{
    // 一对大括号就是一个块级作用域
    var a = 10;
    let b = 2; // let声明的变量只能声明一次
    console.log(b)
}
console.log(a);

var c = 10;
let d = 2;
console.log('window.c',window.c)
console.log('window.d',window.d)//不能通过window访问


for(let i=0;i<5;i++){
  console.log(i)
}
// console.log(i)
{
  //const用于声明常量
  // 必须同时初始化
  const PI = 3.14;
  // const a;
  // a=1; 常亮不能先声明后初始化，必须声明的同时就初始化

  // 声明出来的常量不可修改它的值
  // PI = 3.141592654

  // 如果常亮的值是一个对象或数组，则可以修改对象中的属性或数组中的元素
 
  // 通过常量所指向的引用修改的数据，而不是直接修改他的引用
  const obj = {
    a:1,b:1,c:1,d:1
  };
  obj.a = 10;
  console.log(obj)
  obj.b = 100;// 没有修改引用地址，所以不会报错
  console.log(obj);
  const arr = [1,2,3]
  // arr = [1,2,3]  不能直接修改数组的地址
  arr[0] = 19;
  console.log(arr)
} 











































