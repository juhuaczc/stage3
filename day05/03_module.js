var id = 1;
var name = "张三";
function say(){
    console.log("你好");
}

/* exports.sid = id;
exports.sname = name;
exports.say = say; */

/* module.exports ={
    sid:id,
    sanme:name,
    say:say
} */
function Stu(id,name){
    this.id = id;
    this.name = name;
}
Stu.prototype.say = function(){
    console.log(this.name)
}
module.exports = Stu; 


