### 什么是requireJS
RequireJS 是一个JavaScript模块加载器。

### requireJS的作用
* （1）实现js文件的异步加载，避免网页失去响应；
* （2）管理模块之间的依赖性，便于代码的编写和维护。

### 加载requireJS
#### 函数入口
```
<script src="js/require.js" data-main="js/main.js"></script>
```
data-main属性的作用是，指定网页程序的主模块。在上例中，就是js目录下面的main.js，这个文件会第一个被require.js加载

#### 加载其他的模块--require()
```
// main.js
　　require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
　　　　// some code here
　　});
```
* 第一个参数
    * 第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
* 第二个参数
    * 第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，
    从而在回调函数内部就可以使用这些模块。

#### 配置模块的路径---require.config()
假设js文件都是放在lib目录下的
```
　　require.config({
　　　　paths: {
　　　　　　"jquery": "lib/jquery.min",
　　　　　　"underscore": "lib/underscore.min",
　　　　　　"backbone": "lib/backbone.min"
　　　　}
　　});
```
还可以通过指定基目录(baseUrl)的方式
```
　　require.config({
　　　　baseUrl: "js/lib",
　　　　paths: {
　　　　　　"jquery": "jquery.min",
　　　　　　"underscore": "underscore.min",
　　　　　　"backbone": "backbone.min"
　　　　}
　　});
```
如果某个模块在另一台主机上，也可以直接指定它的网址，比如：
```
　　require.config({
　　　　paths: {
　　　　　　"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"
　　　　}
　　});
```

### requireJS与AMD规范
* 在AMD规范中对于模块的要求
就是模块必须采用特定的define()函数来定义。如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中。
```
假定现在有一个math.js文件，它定义了一个math模块。那么，math.js就要这样写：
　　// math.js
　　define(function (){
　　　　var add = function (x,y){
　　　　　　return x+y;
　　　　};
　　　　return {
　　　　　　add: add
　　　　};
　　});
加载方法如下：
　　// main.js
　　require(['math'], function (math){
　　　　alert(math.add(1,1));
　　});
如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。
　　define(['myLib'], function(myLib){
　　　　function foo(){
　　　　　　myLib.doSomething();
　　　　}
　　　　return {
　　　　　　foo : foo
　　　　};
　　});
当require()函数加载上面这个模块的时候，就会先加载myLib.js文件。
```

### requireJS 记载非规范的模块

比如：underscore和backbone这两个库，都没有采用AMD规范编写。如果要加载它们的话，必须先定义它们的特征。
```
require.config({
　　　　shim: {

　　　　　　'underscore':{
　　　　　　　　exports: '_'
　　　　　　},
　　　　　　'backbone': {
　　　　　　　　deps: ['underscore', 'jquery'],
　　　　　　　　exports: 'Backbone'
　　　　　　}
　　　　}
　　});
```

require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，
* shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义
（1）exports值（输出的变量名），表明这个模块外部调用时的名称；
（2）deps数组，表明该模块的依赖性。



参考文献：
http://www.requirejs.cn/
http://www.ruanyifeng.com/blog/2012/11/require_js.html
