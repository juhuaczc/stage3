// 创建teacher路由
var express = require("express");
// 创建路由对象
var router = express.Router();
// 使用路由对象处理具体请求
//   /teacher/
router.get('/',function(req,res){
    res.send('/teacher的/请求')
})
// /teacher/login
router.get('/login',function(req,res){
    res.send('/teacher的/login请求')
})
// /teacher/logout
router.get('/logout',function(req,res){
    res.send('/teacher的/logout请求')
})
// /teacher/choose
router.get('/choose',function(req,res){
    res.send('/teacher的/课程请求')
})

// 暴露路由对象
module.exports = router;