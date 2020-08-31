{
    // 字符串新增的表达方式``
    let str1 = 'abc';
    let str2 = "abc";
    let str3 = `abc`;
    // 适用于``表示的字符串在引号中间可以换行
    let str4 = `
<div>
    <h1>字符串</h1>
</div>`;
    console.log(str4)
    document.write(str4)
    str4 = str4.replace(`h1`,`h4`);
    console.log(str4)
    document.write(str4)
}

{
    //字符串的拼接
    let name = '张三';
    let age = 23;
    let str = `你好，我叫${name}，几年${age}岁`;
    console.log(str);

    str = `abcd${age>30?'中年人':'年轻人'}qwer`
    console.log(str);
   

    str = `今年${age}岁，明年就是${age+1}岁`
    console.log(str) ;
    str = `abcd${10>5}qwer`
    console.log(str);
}
//includes(), startsWith(), endsWith()
//repeat()
//padStart()，padEnd()
//trimStart()，trimEnd()
//matchAll()
{   
    // include() 判断字符串中是否包含某一个字符串
    var str = `Hello,my name is HanMeimei.I'm thirteen years old!`;
    // 是否包含me
    console.log(str.includes('me'))
    // 第二个参数表示从哪个位置开始查询
    console.log(str.includes('me',str.lastIndexOf('me')+1))

    // startsWith判断字符串是否是以哪个字符串开头的
    console.log(str.startsWith('Hello'))
    console.log(str.endsWith('old'))
}

{
    // repeat() 重复某个字符串
    console.log('a'.repeat(12))
    console.log('\\'.repeat(5))
    console.log('韩梅梅，我喜欢你！'.repeat(3))
    // 如果参数不是整数，则舍弃小数部分(向下取整)
    console.log('\\'.repeat(5.9))
    console.log('\\'.repeat(0.9))
}

{
    // padStart,padEnd 向字符串的开头或结尾填充内容
    // 实现左对齐或右对齐   
    // 第一个参数表示填充到目标长度
    // 第二个参数表示使用了什么字符串来填充
    console.log('123'.padStart(10,'#'))
    // 如果原字符串超过了10位，则截取其达到10位
    console.log('123456'.padStart(10,'abc'))
    // 如果原字符串已经达到了10位，则不作操作
    console.log('1234567891'.padStart(10,'#'))
    console.log('126'.padStart(10,'#'))
    console.log('1'.padStart(10,'#'))
}

{
    // trimStart()清除字符串开头部分的空格
    // trimEnd() 清除尾部的空格
    // trim() 清除开头和结尾的空格
}

{
    // matchAll()
    let result = 'abca2a'.matchAll(/a/g)
    /* console.log(result.next())
    console.log(result.next())
    console.log(result.next())
    console.log(result.next())
    console.log(result.next()) */
    let res = null;
    res = result.next();
    while(!res.done){
      console.log(res)
      res = result.next()
    }
    console.log(res)
}