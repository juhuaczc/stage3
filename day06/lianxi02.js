// 获取uploads文件夹中所有图片，将其展示在页面上

var express = require('express');
var fs = require('fs')
var app = express();
app.listen(4000);

// 设置视图模板引擎
app.set('view engine','ejs')

// 将当前路径下的public文件夹设置为根目录
app.use(express.static('./uploads'));

// 处理请求
app.get('/',function(req,res){
    // 获取uploads中所有的图片
    var pics = fs.readdirSync('./uploads');
    // 将pics传递给视图模板解析
    res.render("lianxi02",{pics:pics})
})



