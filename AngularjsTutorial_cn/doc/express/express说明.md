


## API



### Response
| API           | 描述           |
| ------------- |----------------|
|res.locals     |把一些`模板引擎`中需要使用的方法和属性，可以放在这个属性上|
|res.render()   |渲染模板                |
|res.send()     |返回一个http请求        |
|res.set()      |设置http响应的头部      |
|res.status()   |设置http响应的状态码    |
|res.redirect() |设置重定向              |



app.set


1:在express中设置的那些方法可以在`模板引擎`中访问

* app.set(key,value)
通过 settings.key 可以访问到相应的值

* res.locals.method
在view





参考文献：
http://devdocs.io/express/index#res.locals
