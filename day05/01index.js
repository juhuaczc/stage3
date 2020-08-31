// 创建服务器启动监听
// 当访问时，返回index.html页面内容
var http = require('http');
var fs = require('fs')
http.createServer(function(req,res){
    // 获取每一个请求地址
    var url = req.url;
    console.log(url);
    if(url=='/'){ 
        url = "/index.html";
    }
    fs.readFile('./project'+url,function(err,data){
    if(err){
        console.log(err);
        res.end("<h1>Open Page Error!</h1>");
        return ;
    }
    res.end(data);
})




}).listen(4000)