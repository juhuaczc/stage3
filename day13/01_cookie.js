var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')

app.listen(4000);

app.use(cookieParser('abc'))

// 设置cookie
app.get('/',function(req,res){
    res.cookie('cookie1',"aaaa");
    res.cookie('cookie2',"bbbb",{httpOnly:true});// 无法使用脚本获取cookie2 
    res.cookie("cookie3",'ccc',{domain:'localhost'});// 只能通过localhost访问
    res.cookie("cookie4",'dddd',{expires:new Date(Date.now()+3000)});// 3秒后到期
    res.cookie('cookie5',"eeee",{maxAge:1000*10*10*24*10}) // 有效期

    res.cookie('cookie6','pathpath',{path:'/patha'})// 只能在指定的请求路径下访问

    res.cookie('cookie7','signed',{signed:true})

    res.end();
})

app.get('/getcookie',function(req,res){
    console.log(req.cookies)
    console.log(req.signedCookies)

    res.end();
})

app.get('/patha',function(req,res){
    res.end()
})
app.get('/pathb',function(req,res){
    res.end()
})