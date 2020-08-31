var a = require('./03_module.js');
console.log(a);

/* console.log(a.sname)
console.log(a.sid)
console.log(a.say()) */


var s = new a(1,"张三");
console.log(s);
s.say()
var s2 = new a(2,"李四");
console.log(s2)
s2.say();