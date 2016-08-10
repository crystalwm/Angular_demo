#### lite-server
1.当node-server作为服务器的时候使用
2.当HTML，JavaScript修改的时候重现刷新页面
3.`injects CSS changes using sockets`
4.当路由找不到的时候，有一个fallback页面

#### Why
1.BrowserSync是我们想要的快速的、轻量级的开发服务器
2.`BrowserSync的缺点`
  与angularJS的路由有关，NodeJS中也会有路由。
3.lite-server是在BrowserSync基础上的包装

#### Installation and Usage
```
$ npm install lite-server --save-dev
```

```
# Inside package.json...
  "scripts": {
    "dev": "lite-server"
  },
```

```
$ npm run dev
```

#### Global Installation
```
$ npm install -g lite-server

# To run:
$ lite-server
```

#### Custom Configuration
1.lite-server的默认行为
  1.1 从当前文件夹启动服务
  1.2 打开浏览器
  1.3 使用HTML5 路由到index.html
2.由于lite-server给予BrowserSync，因此可以重写默认配置（通过bs-config.json或者bs-config.js）
  2.1 可以指定配置文件所在的目录
  ```
  lite-server -c configs/my-bs-config.js
  ```
  例如做如下的修改
  ```
  {
    "port": 8000,
    "files": ["./src/**/*.{html,htm,css,js}"],
    "server": { "baseDir": "./src" }
  }
  ```
3.如果有更加复杂的修改需求，可以查看reference

#### Testing
当我们做端到端的测试的时候，我们可能不希望log很冗长，我们可能需要阻止浏览器打开窗口，
我们可以在`bs-config.js`文件中进行设置。
```javscript
 open: false
  logLevel: "silent",
  server: {
    middleware: {
      0: null
    }
  }
```


#### Known Issues
BrowserSync可以自动检测到css文件的变化，但是由于在Angualr2中css是embedded，

#### problem
1. lite-server command not found
   lite-server 需要全局安装，待会看看全局安装之后，是否还是有相同的问题。





reference:
https://github.com/johnpapa/lite-server
https://github.com/johnpapa/lite-server/issues/9

