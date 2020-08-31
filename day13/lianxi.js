var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');


app.listen(4000);

app.use(cookieParser('keyboard cat'));

app.use(express.urlencoded({extended:true}));

// 数据库操作
var userSchema = new mongoose.Schema({
    username:String,
    password:String
})
var User = mongoose.model("user",userSchema)
mongoose.connect('mongodb://localhost:27017/web',{useUnifiedTopology:true,useNewUrlParser:true});



app.get('/',function(req,res){
    // 获取cookie，判断有没有登录过
    var username = req.cookies.username;
    if(!username){//登录了
        res.send('<form action="/login" method="post">用户名:<input type="text" name="username">密码:<input type="password" name="password"><button type="submit">登录</button><a href="/regist">新用户注册</a></form>')
        
        return;
    }
    // 找到了用户名
    // 到数据库中检查该用户名是否存在
    User.find({username:username},function(err,result){
        if(err){
            console.log(err);
            res.send("网络故障")
            return ;
        }
        if(result.length==0){
            // 数据库中没有cookie里保存的用户名
            // 清除无效的cookie
            res.clearCookie('username')
            // 返回信息
            res.send('<h1>登录失效，请重新<a href="/">登录</a></h1>');
            return ;
        }
        // 在数据库找到了对应的cookie名
        res.send('欢迎你：'+username)
    })
        
})

app.post('/login',function(req,res){
    var query = req.body;//{username:xxx,password:xxx}
    // 到数据库中查找，用户名和密码是否匹配
    User.find(query,function(err,result){
        if(err){
            console.log(err)
            res.send('网络错误');
            return ;
        }
        if(result.length==0){
            res.send('<h1>登录失败，用户名密码错误</h1>')
            return ;
        }
        // 用户名密码正确，登陆成功 保存登录状态
        res.cookie('username',query.username);
        res.send('登陆成功，欢迎你：'+query.username);
    })
})


app.get("/regist",function(req,res){
    
    res.send('<form action="/regist" method="post">用户名:<input type="text" name="username">密码:<input type="password" name="password"><button type="submit">登录</button><a href="/">登录</a></form>')
})

app.post("/regist",function(req,res){
    var query = req.body;
    // 查看数据库中是否存在username
    User.find({uaer:query.username},function(err,result){
        if(err){
            console.log(err);
            res.send('网络波动');
            return ;
        }
        if(result.length>0){
            // 找到了数据，用户名存在
            res.send('用户名已存在')
            return ;
        }
            // 用户名不存在，可以保存进数据库
            var o = new User(query);
            o.save(function(err){
                if(err){
                    console.log(err);
                    res.send("网络错误，注册失败")
                    return ;
                }
                // 注册成功
                res.cookie('username',query.username);
                res.send('注册成功，欢迎你：'+query.username)

            })
    })
   
})