var fs = require("fs");

// 是否要创建父目录
/* fs.mkdir("a/b",{recursive:true},function(err){
    if(err){
        console.log("创建失败");
        console.log(err)
        return;
    }
    console.log("成功")
}) */






// 同步方法
var a = fs.mkdirSync("a")
console.log(a);
