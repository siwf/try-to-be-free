得分点 

new XMLHttpRequest()、

设置请求参数open()、

发送请求request.send()、

响应request.onreadystatechange 

标准回答 创建ajax过程：

1. 创建XHR对象：new XMLHttpRequest() 

2. 设置请求参数：request.open(Method, 服务器接口地址); 

3.  发送请求: request.send()，如果是get请求不需要参数，post请求需要参数request.send(data) 

4.  监听请求成功后的状态变化：根据状态码进行相应的处理。

   ```js
    XHR.onreadystatechange = 
      function () { 
      if (XHR.readyState == 4 && XHR.status == 200){ 
        console.log(XHR.responseText); // 主动释放,JS本身也会回收的 XHR = null; } }; 加分回答 POST请求需要设置请求头 readyState值说明 0：初始化,XHR对象已经创建,还未执行open 1：载入,已经调用open方法,但是还没发送请求 2：载入完成,请求已经发送完成 3：交互,可以接收到部分数据 4：数据全部返回 status值说明 200：成功 404：没有发现文件、查询或URl 500：服务器产生内部错误
   ```

   