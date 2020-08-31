var http = require("http");
var fs = require("fs");
var url = require("url")

var server = http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return ;
    }
    var urlobj = url.parse(req.url,true);
    var path = urlobj.pathname;
    console.log(path)
    console.log(urlobj.query)
    res.setHeader("content-type","text/html;charset=utf-8")
    // 接收数据
    if(path=="/tijiao"){
        var username = urlobj.query.username
        console.log(username);
        var liuyan = urlobj.query.liuyan
        console.log(liuyan);
        var message = urlobj.query.message
        var file = ""
        
        
        return ; 
    }

    // 显示数据
    if(path=="/show"){


        return;
    }




    // 其他情况跳转到登录页面
    fs.readFile("./lianxi.html",function(err,data){
        if(err){
            console.log(err);
            res.end('读取页面错误');
            return ;
        }
        res.end(data);
    })
}).listen(4000);