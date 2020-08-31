/* var crypto = require("crypto");
var fs = require('fs');
// 1. 给密码(明文)加密
// var str = "123456";


// 2. 验证文件的数据一致性
// var data = fs.readFileSync('./1.exe').toString();

// 3. 一般情况下需要加密多次
var str = "123";
var pas = crypto.createHash("md5").update(str).digest("base64");

//加盐
pas = pas.substring(3,20);
pas = '4xr'+pas+'.com.cn';
console.log(pas)
// www.5YqxZB.com.cn


pas = crypto.createHash("md5").update(pas).digest("base64");




console.log(pas); */



var {encrypt} = require('./myMd5');
var pass = encrypt('123');
console.log(pass)
























