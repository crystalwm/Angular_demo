

**模板将被插入哪里?**
>状态被激活时，它的模板会自动插入到父状态对应的模板中包含`ui-view`属性的元素内部。如果是顶层的状态，
那么它的父模板就是index.html。

**有三种方法来激活状态**
>1:调用$state.go()方法，这是一个高级的便利方法；
 2:点击包含ui-sref指令的链接；
 3:导航到与状态相关联的 url。
 
**ui.router工作原理** 
>将hash值(#xxx)与一系列的路由规则进行查找匹配，匹配出一个符合条件的规则，然后根据这个规则，进行数据的获取，以及页面的渲染。

**路由的查找匹配**
1:angular在每次浏览器hash change的时候也会触发$locationChangeSuccess事件
2:ui.router 监听了$locationChangeSuccess事件，于是开始通过遍历一系列rules，进行路由查找匹配
3:当匹配到路由后，就通过$state.transitionTo(state,...)，跳转激活对应的state
4:最后，完成数据请求和模板的渲染

**在ui-router中可以直接查找吗？**
在用ui.router在创建路由时：
会实例化一个对应的state对象，并存储起来(states集合里面)
每一个state对象都有一个state.name进行唯一标识(如：’home’)
根据以上两点，于是ui.router提供了另一个指令叫做：ui-sref指令，来解决这个问题，比如这样：
```
<a ui-sref="home">通过ui-sref跳转到home state</a>
```

首先，ui-sref=”home”指令会给对应的dom添加click事件，然后根据state.name，直接跳转到对应的state，代码像这样：
```
element.bind("click", function(e) {
    // ..省略若干代码
    var transition = $timeout(function() {
      // 手动跳转到指定的state
      $state.go(ref.state, params, options);
    });
});
```


**ui.router是基于state(状态)的，而不是url**
>

## $stateProvider

$stateProvider.state(stateName, stateConfig)
**参数：**

* stateName

```
// The state() method takes a unique stateName (String) and a stateConfig (Object)
$stateProvider.state(stateName, stateConfig);

// stateName can be a single top-level name (must be unique).
$stateProvider.state("home", {});

// Or it can be a nested state name. This state is a child of the above "home" state.
$stateProvider.state("home.newest", {});

// Nest states as deeply as needed.
$stateProvider.state("home.newest.abc.xyz.inception", {});

// state() returns $stateProvider, so you can chain state declarations.
$stateProvider.state("home", {}).state("about", {}).state("contacts", {});
```

* stateConfig
**属性**
template, templateUrl, templateProvider
三种方式启动你的模板，三选一
template HTML标签或者返回HTML标签的函数
templateUrl URL或返回URL的函数
templateProvider 函数，返回HTML标签

**方法**
controller 函数或者控制器的名称
controllerProvider 控制器提供者，动态的返回一个控制器的名称
可以为模块指定一个控制器
```
$stateProvider.state('contacts', {
  template: '<h1>学习 ui-router - 管理状态</h1>',
  controller: function($scope){
    $scope.title = 'My Contacts';
  }
})
```
或者是
```
$stateProvider.state('contacts', {
  template: ...,
  controller: 'ContactsCtrl'
})
```


**返回值**
$stateProvider

**例子说明**
```
$stateProvider
    .state('contacts', {
        url: "/contacts",
        templateUrl: 'contacts.html'
    })
```
假设我们访问的页面是index.html
当我们访问http://xxxx#/contacts，这个路由规则被匹配到，对应的模板会被填到某个div[ui-view]中。
`contacts状态被激活`，使用contacts.html中的内容填充ui-view中的内容。
或者当我们通过transitionto(contacts)状态的时候，url变成 index.html/contacts

## $urlRouterProvider
**作用**
$urlRouterProvider负责监视$location，当$location改变后，$urlRouterProvider将从一个列表，一个接一个查找匹配项，直到找到。

**主要的方法**
`when() for redirection 重定向`
    参数：
    what String | RegExp | UrlMatcher，你想重定向的传入路径
    handler String | Function 将要重定向到的路径
    
handler 作为 String
    如果handler是字符串，它被视为一个重定向，并且根据匹配语法决定重定向的地址。

handler 作为 Function
如果handler是一个函数，这个函数是注入一些服务的。如果$location匹配成功，函数将被调用。你可以选择性注入$match。
函数可以返回：
falsy 表明规则不匹配，$urlRouter将试图寻找另一个匹配
String 该字符串作为重定向地址并且作为参数传递给$location.url()
nothing或者任何为真的值，告诉$urlRouterurl 已经被处理
示例
```
$urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
    if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
        $state.transitionTo(state, $match, false);
    }
}]);
```

`otherwise() 无效路由`
参数：

* path String | Function 你想重定向url路径或者一个函数返回url路径。函数可以包含$injector和$location两个参数。

```
app.config(function($urlRouterProvider){
    // 在配置（状态配置和when()方法）中没有找到url的任何匹配
    // otherwise will take care of routing the user to the specified url
    $urlRouterProvider.otherwise('/index');
    // Example of using function rule as param
    $urlRouterProvider.otherwise(function($injector, $location){
        ... some advanced code...
    });
})
```

`rule() 自定义url处理`
参数：
handler Function 一个函数，包含$injector和$location两个服务作为参数，函数负责返回一个有效的路径的字符串

```
app.config(function($urlRouterProvider){
    // Here's an example of how you might allow case insensitive urls
    $urlRouterProvider.rule(function ($injector, $location) {
        var path = $location.path(), normalized = path.toLowerCase();
        if (path != normalized) return normalized;
    });
})
```

## ui-sref 指令链接到特定状态
```
<a ui-sref="home">Home</a>
<a ui-sref="about">About</a>
<a ui-sref="contacts.list">Contacts</a>
```


#### 1:路径对应
```
    $urlRouterProvider.when("","PageTab");
/*    $stateProvider.state('PageTabe',{
        url:'/PageTab',
        templateUrl:'PageTab.html'
    }).state('PageTabe.Page1',{
        url:'/Page1',
        templateUrl:'Page1.html'
    }).state('PageTabe.Page2',{
        url:'/Page2',
        templateUrl:'Page2.html'
    }).state('PageTabe.Page3',{
        url:'/Page3',
        templateUrl:'Page3.html'
    });*/

```
1:$urlRouterProvider.when("","PageTab");  
http://localhost:63342/dr-frontend.git/test/ui-router-demo/Main.html#/PageTab
2 :激活状态PageTabe
$stateProvider.state('PageTabe',{
         url:'/PageTab',
         templateUrl:'PageTab.html'
     })
     
     
#### 父路由，子路由
 
```
    $urlRouterProvider.when("","Page1");
    $stateProvider.state('PageTabe',{
        url:'/PageTab',
        templateUrl:'PageTab.html'
    }).state('Page1',{
        url:'/Page1',
        templateUrl:'Page1.html'
    }).state('PageTabe.Page2',{
        url:'/Page2',
        templateUrl:'Page2.html'
    }).state('PageTabe.Page3',{
        url:'/Page3',
        templateUrl:'Page3.html'
    });
```
Page1是一个单独的路由，这个时候页面可以正常的显示

```
    $urlRouterProvider.when("","Page1");
    $stateProvider.state('PageTabe',{
        url:'/PageTab',
        templateUrl:'PageTab.html'
    }).state('PageTabe.Page1',{
        url:'/Page1',
        templateUrl:'Page1.html'
    }).state('PageTabe.Page2',{
        url:'/Page2',
        templateUrl:'Page2.html'
    }).state('PageTabe.Page3',{
        url:'/Page3',
        templateUrl:'Page3.html'
    });
```
这个时候就不能正常的显示，在于`PageTabe.Page1`,必须父路由先激活才可以。


#### 父子路由与路径的对应关系
控制器文件
```
var appModule=angular.module('app',['ui.router']);
appModule.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when("","PageTab");
    $stateProvider.state('PageTabe',{
        url:'/PageTab',
        templateUrl:'PageTab.html'
    }).state('PageTabe.Page1',{
        url:'/Page1',
        templateUrl:'Page1.html'
    }).state('PageTabe.Page2',{
        url:'/Page2',
        templateUrl:'Page2.html'
    }).state('PageTabe.Page3',{
        url:'/Page3',
        templateUrl:'Page3.html'
    });
});
```
html文件通过`href`文件引入
```
<div>
    <div>
        <span  style="width: 100px"><a href="#/PageTab/Page1">Page-1</a></span>
        <span  style="width: 100px"><a href="#/PageTab/Page2">Page-2</a></span>
        <span  style="width: 100px"><a href="#/PageTab/Page3">Page-3</a></span>
    </div>
</div>
<div>
    <div ui-view=""/>
</div>
```
注意这里`#/PageTab/Page1`,这是由于在PageTab和Page1状态之间定义了父子关系，因此说要使用这种方式引入

或者这样引入在`ui-sref`中引入。
```
<div>
    <div>
        <span ui-sref="PageTabe.Page1"  style="width: 100px"><a href="">Page-1</a></span>
        <span ui-sref="PageTabe.Page2" style="width: 100px"><a href="">Page-2</a></span>
        <span ui-sref="PageTabe.Page3" style="width: 100px"><a href="">Page-3</a></span>
    </div>
</div>

<div>
    <div ui-view=""/>
</div>

```










参考文献：
http://www.oschina.net/translate/angularjs-ui-router-nested-routes?print
http://bubkoo.com/2014/01/02/angular/ui-router/guide/url-routing/
https://github.com/angular-ui/ui-router/wiki
http://www.aichengxu.com/view/44576
http://sentsin.com/web/1136.html  (源码解析)

