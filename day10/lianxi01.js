var express = require('express');
const { ObjectID } = require('bson');
// 使用node.js连接数据库
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectID;
var app = express();

app.listen(4000);

// 设置post请求的参数的解析方式
app.use(express.urlencoded({extended:true}))

// 连接地址
var url = "mongodb://localhost:27017";
// 链接选项
var opt = {useUnifiedTopology:true}

// /请求
app.get('/',function(req,res){
    //连接数据库
    MongoClient.connect(url,opt,function(err,client){
        if(err){// 连接数据库失败
            console.log(err);
            res.send('<h1>网络波动，稍后再试</h1>');// 连接失败后返回给浏览器的数据
            return ;
        }
        // 连接成功
        console.log("连接成功");
        // 获取数据库对象
        var db = client.db("web");
        // 获取集合对象
        var col = db.collection('product');
        // 获取所有数据
        col.find({}).toArray(function(err,docs){
            if(err){ // 获取数据失败
                console.log(err);
                res.send("获取数据失败");// 返回响应
                client.close();// 关闭连接
                return ;
            }
            console.log(docs);
            // 获取数据成功，将其渲染到视图模板上
            res.render("show.ejs",{products:docs})
            client.close();
        })

    })
})

// get的 /add请求，跳转到添加数据的页面
app.get('/add',function(req,res){
    res.render('add.ejs');
})

// post的/add请求，接收页面传递的数据，将其保存到数据库
app.post("/add",function(req,res){
    // 获取请求参数
    var body = req.body;
    var data = {};
    data.pid = parseInt(body.pid);
    data.pname = body.pname;
    data.price = parseInt(body.price);
    data.count = parseInt(body.count);
    // 连接数据库
    MongoClient.connect(url,opt,function(err,client){
        if(err){
            console.log(err)
            res.send("网络波动，稍后再试")
            return ;
        }
        // 连接成功
        var col = client.db('web').collection('product');
        // 添加数据
        col.insertOne(data,function(err,result){
            if(err){// 添加失败
                console.log(err);
                res.send('进货失败，稍后再试')
                client.close();
                return;
            }
            // 添加成功
            if(result.result.n>0){
                // 添加成功，跳转回首页
                res.redirect('/')
            }else{
                // 数据没添加成功
                res.send('添加失败');
            }
            client.close();
        })
    })

})

// get的 /update请求，跳转到修改的页面
app.get('/update',function(req,res){
    // 获取参数
    var id = req.query.id;
    // 将字符串的id转换为ObjectId类型
    id = ObjectId(id)
    // 根据id查询对应的数据
    MongoClient.connect(url,opt,function(err,client){
      if(err){
        console.log(err);
        res.send('网络波动。稍后再试');
        return ;
      }
      // 连接成功，开始查询对应的数据
      var col = client.db('web').collection('product');
      col.find({_id:id}).toArray(function(err,docs){
        if(err){
          console.log(err);
          res.send('服务器故障');
          client.close();
          return;
        }
        // 查询数据成功
        if(docs.length==0){
          // 没有数据
          res.send('查无此数据');
        }else{
          // 查到了数据
          res.render('update.ejs',{product: docs[0]})
        }
        client.close();
      })
    })
  });


// post的 /update请求，更新数据
app.post("/update",function(req,res){
  var body = req.body;
  var data = {} // 修改的数据
  data.price = parseInt(body.price)
  data.count = parseInt(body.count)
  // 获取_id的值并将其转换为ObjectId类型
  var id = ObjectId(body.id)
  var filter = {_id: id} // 修改的条件
  MongoClient.connect(url,opt,function(err,client){
    if(err){
      console.log(err);
      res.send('网络波动');
      return ;
    }
    // 连接成功，获取集合对象
    var col = client.db('web').collection('product');
    // 修改数据
    col.updateOne(filter,{$set:data},function(err,result){
      if(err){
        console.log(err);
        res.send("修改失败");
        client.close()
        return ;
      }
      if(result.result.nModified>0){
        res.redirect('/')
      }else{
        res.send('数据未曾发生改变，无须更新')
      }
      client.close();
    })
  })
})

// /delete/:id 删除指定id的数据
app.get('/delete/:id',function(req,res){
    var id = req.params.id;// string
    console.log(id);
    id = ObjectId(id);// ObjextId
    var filter = {_id:id}// 删除的条件
    // 连接数据库删除数据
    MongoClient.connect(url,opt,function(err,client){
        if(err){
            console.log(err);
            res.send('网络波动');
            return ;
        }
        // 连接成功，获取集合对象
        var col = client.db('web').collection('product');
        // 删除数据
        col.deleteOne(filter,function(err,result){
            if(err){
                console.log(err);
                res.send("删除失败");
                client.close()
                return ;
            }
           
            
              res.redirect('/')
            
            
            client.close();
        })
    })
})
  





