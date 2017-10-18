# mock-server

###使用步骤

```bash

1. git clone https://github.com/zhangyifei000/mock-server.git
2. cd mock-server
3. npm install
4. npm satrt

```
此时打开 localhost:4000/login,就可以看到我写好的例子了。
localhost换成电脑的ip
ctrl + c可以终止服务，改完代码后不用重新起动服务

```

Error: No default engine was specified and no extension was provided.
    at new View (/Users/bill/test/mock-server/node_modules/express/lib/view.js:61:11)
    at EventEmitter.render (/Users/bill/test/mock-server/node_modules/express/lib/application.js:570:12)
    at ServerResponse.render (/Users/bill/test/mock-server/node_modules/express/lib/response.js:971:7)
    at /Users/bill/test/mock-server/app.js:28:7
    at Layer.handle_error (/Users/bill/test/mock-server/node_modules/express/lib/router/layer.js:71:5)
    at trim_prefix (/Users/bill/test/mock-server/node_modules/express/lib/router/index.js:315:13)
    at /Users/bill/test/mock-server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/bill/test/mock-server/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/bill/test/mock-server/node_modules/express/lib/router/index.js:275:10)
    at /Users/bill/test/mock-server/app.js:17:3

  ```

当出现上述错误的时候，是应为你的路由没有找到造成的

###学习更多

如果你想学习更多请参考express api
https://expressjs.com/en/4x/api.html#res.sendFile 