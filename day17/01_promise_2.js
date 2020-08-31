{
  // Promise.all()
  // 将多个promise对象封装成一个新的promise对象
  // 只有当所有promise对象的状态都变成fulfilled时
  // 新的promise对象才会变成fulfilled状态
  // 只要有一个是rejected状态，新的promise对象就是rejected

  // 同时加载多张图片，将其显示在页面上

  // let loadImg = src=>{}
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img = document.createElement('img');
      img.src = src;
      img.width = 300;
      // 图片加载完成后调用
      img.onload = ()=>{
        // 加载完成，返回img
        resolve(img);
      }
      img.onerror = err=>{
        // 加载失败，返回错误信息
        reject(err);
      }
    })
  }

  // Promise.race()
  // 参数和all方法一样，是一个promise实例数组
  // 返回值也是一个新的promise对象
  // 当参数中的promise有一个状态转变为fulfilled
  // 新的promise的状态就会变成fulfilled，剩下的忽略
  
//   Promise.race([
//     loadImg('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1702311407,2194984954&fm=26&gp=0.jpg'),
//     loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2231316319,1914731772&fm=26&gp=0.jpg'),
//      loadImg('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3755090557,4135851991&fm=26&gp=0.jpg'),
//     loadImg('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2291144675,2515127839&fm=26&gp=0.jpg')
//   ]).then(img=>{
//     console.log(img)
//     document.body.appendChild(img)
    
//   }).catch(err=>{
//     console.log(err)
//   })

Promise.allSettled([
    loadImg('https://timgsa.baidu.om/timg?image&quality=80&size=b9999_10000&sec=1596706439685&di=7f046098925db95f5511d3d66c0420a3&imgtype=0&src=http%3A%2F%2F2f.zol-img.com.cn%2Fproduct%2F153%2F509%2Fce7f5KSOeEcC6.jpg'),
    loadImg('https://timgsa.baidu.om/timg?image&quality=80&size=b9999_10000&sec=1596706470879&di=4f3f61d0b988f70537c9b0488f4c4cef&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1307%2F20%2Fc1%2F23530884_1374288117651.jpg'),
    loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596706483969&di=881687b800ddae0729610d28e426aaca&imgtype=0&src=http%3A%2F%2Fcache.house.sina.com.cn%2Fcitylifehouse%2Fcitylife%2F48%2Fe9%2F20090614_32953_1.jpg'),
    loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596706495790&di=0895841c86563d9359cfdbc92ad17ccb&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F09%2F03%2F01000000000000119090321985509.jpg')
  ])
  .then(results=>{
    console.log(results)
  })
  
  // all方法的参数是一个promise实例数组
  // 返回值是一个新的promise对象
  // Promise.all([
  //   loadImg('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg'),
  //   loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596704789661&di=c36a47e295d1c03cb7c0ebc4c96eab40&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F05%2F00%2F01300000194285122188000535877.jpg'),
  //   loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596704789660&di=b5ee25e7f1e3ff1b83782cac811d070a&imgtype=0&src=http%3A%2F%2Fp2.so.qhimgs1.com%2Ft01dfcbc38578dac4c2.jpg'),
  //   loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596704789657&di=4d3e1923424799c8c9b9947d4d14cf3b&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg')
  // ])
  // // 全部加载成功后
  // .then(imgs=>{
  //   console.log(imgs)
  //   imgs.forEach(img=>{
  //     document.body.appendChild(img)
  //   })
  // })
  // // 捕获第一个加载失败的promise对象
  // .catch(err=>{
  //   console.log(err);
  // })

}