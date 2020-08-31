var http = require("http");
var fs = require("fs"); //读取文件

var server = http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return ;
    }
    res.setHeader("content-type","text/html;charset=utf-8")
    fs.readFile("./text_03.html",function(err,data){
        if(err){
          res.end("读取页面出错")
          return ;
        }
        res.end(data)
      })
      
}).listen(4000)