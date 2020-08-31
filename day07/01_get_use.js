var express = require('express')
var fs =require('fs')
var app = express();

app.listen(4000)

app.use('/',function(req,res,next){
    console.log(req.url);
    if(req.url!='/'){
        var data = fs.readFileSync('./public'+req.url);
       /*  if(req.url=="/style/index.css"){
            res.setHeader("content-type","text/css");
        } */
        res.send(data)
        return;
    }
    // 请求地址是/，把请求放行，让后续的中间件处理这个请求
    next()
})

app.get('/',function(req,res){
    res.render('test.ejs');
})


// 封装函数
/* function rootDir(root){
    return function(req,res,next){
      console.log(req.url);
      // 如果请求地址不是 / 
      if(req.url!='/'){
        var data = fs.readFileSync(root+req.url);
        if(req.url=='/style/index.css'){
          res.setHeader("content-type","text/css")
        }
        res.send(data)
        return ;
      }
      // 请求地址是 / ，把请求放行，让后续的中间件来处理这个请求
      next()
    }
  }
 */