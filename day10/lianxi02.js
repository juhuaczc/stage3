var express = require('express');
var app = express();

app.listen(4000);

// 连接地址
var url = "mongodb://localhost:27017";
// 链接选项
var opt = {useUnifiedTopology:true}

// /请求
app.get('/',function(req,res){

    res.render('denglu.ejs');
})
