/* var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cookieParser = require('cookie-parser');
var app = express();

var url = "mongodb://localhost:27017"
app.use(cookieParser('keyboard cat'))
var opt = {useUnifiedTopology: true}

app.listen(4000);

// 设置post请求参数的解析方式
// application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// 开始页面
app.get('/',function(req,res){
     // 判断cookie,判断用户有没有登录过
     var username = req.cookies.username;
     console.log(username);
     if(username){ // 找到了username的cookie
         // 说明之前已经登陆过了，不需要在登录
         res.send('<h1>欢迎你：'+username+'</h1>')
         return ;
     }
        res.render('login.ejs');
})

// 跳转到登录页面
app.get('/login',function(req,res){
    res.render('login.ejs');
})
// 跳转到注册页面
app.get('/regist',function(req,res){
    res.render('regist.ejs');
})

// 处理注册请求
app.post('/regist',function(req,res){
  
    var username = req.body.username;
    console.log(req.body);//{ username: '13', password: '13' }
    // console.log(req)
    var password = req.body.password;
    // 对username和password的合法性进行判断
    // 判断数据库中是否已经存在该用户名
    MongoClient.connect(url,opt,function(err,client){
      if(err){
        console.log(err);
        res.send('网络波动，稍后再试')
        return ;
      }
      var col = client.db('web').collection('users')
      // 判断username是否存在
      col.find({username:username}).toArray(function(err,docs){
        if(err){
          console.log(err);
          res.send('网络波动，稍后再试')
          client.close()
          return ;
        }
        // docs如果不是空数组，则说明查到了数据
        if(docs.length>0){
          res.send('用户名已存在')
          client.close()
          return;
        }
        // 空数组，没有查到数据，保存数据
        var data = {
          username:username,
          password:password
        }
        col.insertOne(data,function(err,result){
          if(err){
            console.log(err);
            res.send('注册失败')
            client.close()
            return; 
          }
          if(result.insertedCount==0){
            
            res.send('注册失败')
          }else{
            res.cookie('username',username);
            res.send('注册成功');

           
          }
          client.close()
        })
        
      })
    })
  })

// 处理用户登录
app.post('/login',function(req,res){
    var param = req.body;// {username:xxx,password:xxxx}
    MongoClient.connect(url,opt,function(err,client){
      if(err){
        res.send('error')
        return ;
      }
      var col = client.db('web').collection('users')
      var username = param.username;
      var password = param.password;
      // 根据用户名查询数据
      col.find({username:username}).toArray(function(err,docs){
        if(err){
          res.send('波动')
          client.close()
          return ;
        }
        // 没有查到数据
        if(docs.length==0){
          res.send('用户名错误')
        }else{
          // 用户名正确，检查密码是否匹配
          if(password==docs[0].password){
            res.cookie('username',username);
            res.send('登录很成功');
          }else{
            res.send('密码错误')
          }
          client.close();
        }
      })
      
    })
   
})





 */





var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var app = express();

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:String,
  password:String
});
var user = mongoose.model("user",userSchema);


var url = 'mongodb://localhost:27017/web';//数据库协议

var opt = {
    useUnifiedTopology:true,
    useNewUrlParser:true
};
mongoose.connect(url,opt);// 连接数据库

app.listen(4000);
app.use(cookieParser('keyboard cat'));
app.use(express.urlencoded({extended:true}));



app.get('/',function(req,res){
  // 获取cookie，判断有没有登陆过
  var username = req.cookies.username;
  if(username){
    // 找到了
      res.send("<h1>欢迎你:"+username+"</h1>");
      return;
  }
  // 没有找到
  res.render('login.ejs');
});
app.get('/regist',function(req,res){
  res.render('regist.ejs');
});
app.get('/login',function(req,res){
  res.render('login.ejs');
});


app.post('/login',function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  user.find({username:username},function(err,docs){
    if(err){
      console.log(err);
      res.send("网络错误,稍后再试");
      return;
    }
    // 检查是否存在用户名
    if(docs.length==0){
      res.send('用户名不存在');
    }else{
      // 用户名正确，检查密码是否匹配
      if(password==docs[0].password){
        res.cookie("username",username);
        res.send('登录成功');//两个会冲突
        // res.redirect('/');
      }else{
        res.send('登录密码错误');
      }
    }
  });
});


app.post('/regist',function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  user.find({username:username},function(err,docs){
    if(err){
      console.log(err);
      res.send("网络错误,稍后再试");
      return;
    }
    // 检查是否存在用户名
    if(docs.length==0){ // 用户名不存在
      var data = {
        username:username,
        password:password
      }
      var o = new user(data);
      o.save(function(err,product){
        if(err){
            console.log(err);
            return;
        }
        res.cookie("username",username);
        res.send("注册成功,欢迎你"+username);      
      });
    }else{
      // 用户名存在
      res.send("用户名存在");
      res.redirect('/regist');
    }
  });
});


app.use(function(req,res){
  res.redirect('/');
});












