var http = require("http");

var server = http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return ;
    }
    // req.url可以获得请求地址的路径，参数
    // 拿不到锚点
    console.log(req.url);
    console.log(req.method);

    // 返回响应结束请求
    //res.end();// 不返回任何数据 仅仅结束请求

    //接受请求，返回请求中的参数数据
    // /a/b/c?id=1&age=20
    // 返回：你的请求地址/a/b/c，请求参数是id值为1，age为20
    var url = req.url;
    var path = url.split('?')[0];
    var params = url.split('?')[1].split('&');
    var s ='';
    for(var i=0;i<params.length;i++){
        var arr = params[i].split('=');
        s += arr[0]+"值为"+arr[1]+',';
    }
    s = s.slice(0,s.length-1);
    //
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end("你的请求地址是"+path+",请求参数"+s);
});

server.listen(4000,function(){
    console.log("服务器开启成功，地址为localhost:4000");
});