// 使用node.js连接数据库
var MongoClient = require("mongodb").MongoClient;
// 连接地址
var url = "mongodb://localhost:27017";
// 链接选项
var opt = {useUnifiedTopology:true}
// 开始连接
MongoClient.connect(url,opt,function(err,client){
    if(err){
        console.log(err);
        return ;
    }
    console.log("连接成功");
    // 操作结束后，一定要关闭链接
    // client.close();
    // 获取数据库对象
    var db = client.db("web");
    // 获取集合对象
    var col = db.collection('emp');
    // 增加数据
    var obj1 = {
        name: '王磊',
        age: 30,
        likes: [ '爬山', '烧烤' ],
        score: { html: '78', css: '69', js: '80' }
      }
      var obj2 = {a:10,b:20}
      var obj3 = {a:30,b:40}
      // 修改数据
  /*   col.updateOne({a:20},{$set:{a:20,b:40}},function(err,result){
        if(err){
            console.log(err);
            client.close();
            return ;
        }
        console.log(result);
        client.close(); // 关闭连接
    })  */
  // col.updateMany({a:10},{$set:{a:100,b:200}},function(err,result){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log(result);
  //   }
  //   client.close();
  // })
      // 删除数据
 /*  col.deleteMany({a:100},function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
    }
    client.close();
  }) */
      // 向集合中添加多个数据
    /*   col.insertMany([obj2,obj3],function(err,result){
        if(err){
            // console.log(err);
            client.close();
            return ;
        }
        console.log(result);
        client.close(); // 关闭连接
      }) */
     // 向集合中添加数据
  /*   col.insertOne(obj1,function(err,result){
        if(err){
            console.log(err);
            client.close();
            return ;
        }
        console.log(result);
        client.close(); // 关闭连接
    })  */

    // 删除赵六
    // col.deleteOne({name: "王磊"});

    
  // 查询集合中的所有数据
   col.find().toArray(function(err,docs){
        if(err){
            console.log(err);
            return ;
        }
        console.log(docs);
        // 关闭连接
        client.close();

    })
}) 