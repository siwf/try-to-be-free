

## 说一说cookie sessionStorage localStorage 区别？

#### 解题思路

- 数据存储位置
- 生命周期
- 存储大小 cookie(4k) 其他（5M）
- 写入方式
- 数据共享
- 发送请求时是否携带
- 应用场景 

标准回答 Cookie、SessionStorage、 LocalStorage都是浏览器的本地存储。 

它们的共同点：都是存储在浏览器本地的 

它们的区别：cookie是由服务器端写入的，而SessionStorage、 LocalStorage都是由前端写入的，cookie的生命周期是由服务器端在写入的时候就设置好的，LocalStorage是写入就一直存在，除非手动清除，SessionStorage是页面关闭的时候就会自动清除。cookie的存储空间比较小大概4KB，SessionStorage、 LocalStorage存储空间比较大，大概5M。Cookie、SessionStorage、 LocalStorage数据共享都遵循同源原则，SessionStorage还限制必须是同一个页面。在前端给后端发送请求的时候会自动携带Cookie中的数据，但是SessionStorage、 LocalStorage不会 

加分回答 由于它们的以上区别，所以它们的应用场景也不同，Cookie一般用于存储登录验证信息SessionID或者token，LocalStorage常用于存储不易变动的数据，减轻服务器的压力，SessionStorage可以用来检测用户是否是刷新进入页面，如音乐播放器恢复播放进度条的功能。