var gm = require('gm');

gm('./1.jpg')
.stroke("#ffffff")
.drawCircle(100, 100, 20, 10)
.font("./arial.ttf", 40)
.drawText(300, 200, "GMagick!")
.write("./2.jpg", function (err) {
    if (err){
        console.log('修图出错')
        console.log(err);
        return ;
      };
      console.log('成功');
});






/* gm('./1.jpg')//被处理图片的路径
.flip()// 垂直翻转
.magnify()//放大一倍
.rotate('green', 45)//旋转45度，空白部分使用绿色填充
.blur(7, 3)//是图片失去焦点 模糊化
.crop(300, 300, 150, 130)//截图
// .edge(3)
.write('./2.jpg', function (err) {
    // 处理后得到的输出路径
  if (err){
      console.log('修图出错')
      console.log(err);
      return ;
    };
    console.log('成功');
}) */