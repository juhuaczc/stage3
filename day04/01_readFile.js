var fs = require("fs");

console.log(111)
fs.readFile("./day04.txt","utf-8",function(err,data){
  console.log(222)
  if(err){
    console.log("读取文件出错")
    return 
  }
  console.log(data)
})
console.log(333)
// 同步方法中没有回调函数，读取到的结果会作为返回值返回
// console.log(111)
// var data = fs.readFileSync("./day0.txt")
// console.log(222)
// console.log(data)