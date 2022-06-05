var Koa = require("koa");
var app = new Koa();
var Router = require("koa-router")();
const fs = require("fs");
Router.get('/', async (ctx) => {
  const getResource = () => {
      return new Promise((res) => {
          fs.readFile("/Users/swf/Desktop/try-to-be-free/http/cacheFile/a.txt", (err, data) => {
              if (err) {
                  console.log(err)
                  return;
              }
              res(data)
          })
      })
  }
  ctx.set('Cache-Control', 'max-age=100')  //设置强缓存，过期时间为100秒
  await getResource(); 
  ctx.body = 'siwenfeng'
})

Router.get('/pp', async (ctx) => {
  const ifModifiedSince = ctx.request.header['if-modified-since'];
  const getResource = () => {
      return new Promise((res) => {
          fs.stat("/Users/swf/Desktop/try-to-be-free/http/cacheFile/a.txt", (err, stats) => {
              if (err) {
                  console.log(err);
              }
              res(stats)
          })
      })
  }
  let resource = await getResource();
  // atime	Access Time	访问时间	
  // 最后一次访问文件（读取或执行）的时间
  // ctime	Change Time	变化时间	
  // 最后一次改变文件（属性或权限）或者目录（属性或权限）的时间
  // mtime	Modify Time	修改时间	
  // 最后一次修改文件（内容）或者目录（内容）的时间
  if (ifModifiedSince === resource.mtime.toGMTString()) { //把具体的日期转换为（根据 GMT）字符串
      ctx.status = 304;
  }
  ctx.set('Last-Modified', resource.mtime.toGMTString());
  ctx.body = resource
})


app
  .use(Router.routes()) //启动路由
  .use(Router.allowedMethods());
app.listen(3000, () => {
  console.log('端口3000已开启')
});
