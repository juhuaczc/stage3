// 创建student路由
var express = require('express');
// 创建路由对象
var router = express.Router();
// 使用路由对象处理具体请求
//   /student/
router.get('/',function(req,res){
    res.send('/student的/请求')
})
// /student/login
router.get("/login",function(req,res){
    res.send("<h1>学生login请求</h1>")
})
// /student/logout
router.get("/logout",function(req,res){
    res.send("<h1>学生logout请求</h1>")
})
// /studengt/choose
router.get("/choose",function(req,res){
    res.send("<h1>学生选课请求</h1>")
})

// 暴露路由对象
module.exports = router;