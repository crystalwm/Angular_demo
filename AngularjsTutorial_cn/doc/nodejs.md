### module.exports与exports的区别？
* exports 是指向的 module.exports 的引用
* module.exports 初始值为一个空对象 {}，所以 exports 初始值也是 {}
* require() 返回的是 module.exports 而不是 exports

### js文件的存放路径问题？
如果我们使用express框架创建一个项目的时候，它会给你设置好文件的组织目录，这个时候，你把js文件放在public目录下就好了，也没有什么问题。
* 场景
我在httpserver中返回一个html页面，在html页面中有script标签，它需要去引用其他目录下的js文件。
--好像只能使用expres，还是创建一个express项目吧，因为你需要去访问一些其他的资源文件，如果只是nodejs的原生的好像做不到。
