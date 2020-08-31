var a = require("./router.js")
var http = require("http");
const router = require("./router.js");

var server = http.createServer(function(req,res){
res.setHeader("content-type","text/html;charset=utf-8");
    if(req.url=="/favicon.ico"){
        return ;
    }
    if(req.url=="/"){
        router.showIndex(req,res);
        return;
    }
    if(req.url=="/info"){
        router.showInfo(req,res);
        return;
    }
    //其他结果
    router.showErr(req,res)
}).listen(4000)