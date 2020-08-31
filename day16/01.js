{
//     对象的解构赋值
//     对象结构成功，必须满足一个条件
//     变量名与属性名保持一致
    let{a,b} = {a:1,b:2}
   console.log(a,b)
//     c,d 取不到值，等号右边的对象中没有对应的属性
    let {c,d} = {a:1,b:2}
    console.log(c,d)
}
{   // 在node环境下使用对象得结构赋值获取其他模块中的属性
    /* let t = require('./test.js')
    var a = t.a;
    var b = t.b;
    var c = t.c;
    var d = t.d; */
    // let {a,b,c,d} = require('./test.js')
    // console.log(a,b,c,d)
}
{
    /* let obj = {
        a:1,
        b:{
            x:10
        }
    }
    let {a,b} = obj;
    console.log(a,b)
    // 取对象中某个属性的值
    let {b:{x}}=obj
    console.log(x) */
}
{
    // 对象的扩展
    let username = '张三';
    let password = '123';
    // 完整写法
    let data = {
        username:username,
        password:password
    }
    // 当变量名与属性名相同时，可以采用简写的方式
    let data2 = {
        username,
        password
    }
}

{
    // 对象解构赋值的完整模式和简写模式
    // 1. 因为变量名为a,b和属性名相同，所以采访简写模式
        // let {a,b} = {b:1,a:2}
        // console.log(a,b)
    // 2. 变量名与属性名不一致 变量名为xy
        /* let{a:x,b:y} = {b:1,a:2}
        console.log(x,y) */

}
{
    // 先声明后结构
    // let a,b,c;
    // 必须要小括号包起来，否则会报错
    /* ({a,b,c} = {a:1,b:2,c:3})

    console.log(a,b,c) */
}

{
    // 对象解构赋值的默认值
    /* let {a=0,b=0} = {a:1}
    console.log(a,b)
    let {c:c=0,d:d=0} = {c:1}
    console.log(c,d) */
}
{
    // 展开运算符的使用 ... 
   /*  let obj = {
        name:'jim',
        age:'20',
        sex:'man'
    }
    // 使用 ... 展开赋值obj
    let obj2 = {
        ...obj
    }
    console.log(obj)
    console.log(obj2)
    let o1 = {
        a:1,
        b:2
      }
      let o2 = {
        c:3,
        d:4
      }
    let o = {
        ...o1,
        ...o2
    }
    console.log(o) */
}

{
    /* let news = [
        {
            title:'新闻',
            msg:"这是一条新闻"
        }
    ];
    // let title,msg;
    let [{title,msg}] = news
    console.log(title,msg)
}

{
    let news = [
        {
            title:'新闻1',
            contents:[
                {t:'体育',m:'篮球开始比赛了'},
                {t:'娱乐',m:'电影院开放了'}
            ]
        },
        {
            title:'新闻1',
            contents:[
                {t:'体育',m:'乒乓球是竞赛'},
                {t:'娱乐',m:'电夺宝奇兵'}
            ]
        }
    ] */

    // let [m1,m2] = news
    // console.log(m1,m2)
    // let {title,contents} = m1
    /* let [{title,contents}] = news
    console.log(title,contents)
    let[{contents:[{t:t1,m:m1}]}] = news
    console.log(t1,m1) */
}

{
	// 后端返回的数据
	let result = {
		status: "OK",
		responseType: "json",
		responseDate: [
			{
				id: 101, msg: "服务器返回的数据"
			}
		]
	};


	let {status,responseType, responseDate:[{id,msg}]} = result;
	console.log(status,responseType,id,msg);
}

{
    // 函数参数的解构赋值
    function add(a,b){
        return a+b;
    }
    console.log(add(1,4))

    let arr = [2,5]
    console.log(add(...arr))

    // 参数的数组解构
    function add2([a,b]){
        return a+b;
    }
    console.log(add2(arr))
}

{
    // 函数的参数解析
    function total(...a){
        console.log(a)
    }
    total(1,2,3,4,5,6,7)

    function info(name,age,tel,obj){
        this.name = name;
        this.age = age;
        this.tel = tel;
        ({pro1,pro2} = obj);
        this.pro1 = pro1;
        this.pro2 = pro2;
    }
    let obj = {
        pro1:'pro1',
        pro2:'pro2',
        pro3:'pro3'
    }
    let o = new info('jim',12,159,obj)
    console.log(o)
}

{
    // 函数参数的解构：参数为对象
    function show({a:x,b:y}){
        console.log(x,y)
    }
    let obj = {
        a:1,
        b:2
    }
    show (obj);
}


//includes(), startsWith(), endsWith()
//repeat()
//padStart()，padEnd()
//trimStart()，trimEnd()
//matchAll()
{
    var str = `Hello,my name is HanMeimei.I'm thirteen years old`;
    console.log(str.charCodeAt(0))
}