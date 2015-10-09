

**ģ�彫����������?**
>״̬������ʱ������ģ����Զ����뵽��״̬��Ӧ��ģ���а���`ui-view`���Ե�Ԫ���ڲ�������Ƕ����״̬��
��ô���ĸ�ģ�����index.html��

**�����ַ���������״̬**
>1:����$state.go()����������һ���߼��ı���������
 2:�������ui-srefָ������ӣ�
 3:��������״̬������� url��
 
**ui.router����ԭ��** 
>��hashֵ(#xxx)��һϵ�е�·�ɹ�����в���ƥ�䣬ƥ���һ�����������Ĺ���Ȼ�����������򣬽������ݵĻ�ȡ���Լ�ҳ�����Ⱦ��

**·�ɵĲ���ƥ��**
1:angular��ÿ�������hash change��ʱ��Ҳ�ᴥ��$locationChangeSuccess�¼�
2:ui.router ������$locationChangeSuccess�¼������ǿ�ʼͨ������һϵ��rules������·�ɲ���ƥ��
3:��ƥ�䵽·�ɺ󣬾�ͨ��$state.transitionTo(state,...)����ת�����Ӧ��state
4:���������������ģ�����Ⱦ

**��ui-router�п���ֱ�Ӳ�����**
����ui.router�ڴ���·��ʱ��
��ʵ����һ����Ӧ��state���󣬲��洢����(states��������)
ÿһ��state������һ��state.name����Ψһ��ʶ(�磺��home��)
�����������㣬����ui.router�ṩ����һ��ָ�������ui-srefָ������������⣬����������
```
<a ui-sref="home">ͨ��ui-sref��ת��home state</a>
```

���ȣ�ui-sref=��home��ָ������Ӧ��dom���click�¼���Ȼ�����state.name��ֱ����ת����Ӧ��state��������������
```
element.bind("click", function(e) {
    // ..ʡ�����ɴ���
    var transition = $timeout(function() {
      // �ֶ���ת��ָ����state
      $state.go(ref.state, params, options);
    });
});
```


**ui.router�ǻ���state(״̬)�ģ�������url**
>

## $stateProvider

$stateProvider.state(stateName, stateConfig)
**������**

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
**����**
template, templateUrl, templateProvider
���ַ�ʽ�������ģ�壬��ѡһ
template HTML��ǩ���߷���HTML��ǩ�ĺ���
templateUrl URL�򷵻�URL�ĺ���
templateProvider ����������HTML��ǩ

**����**
controller �������߿�����������
controllerProvider �������ṩ�ߣ���̬�ķ���һ��������������
����Ϊģ��ָ��һ��������
```
$stateProvider.state('contacts', {
  template: '<h1>ѧϰ ui-router - ����״̬</h1>',
  controller: function($scope){
    $scope.title = 'My Contacts';
  }
})
```
������
```
$stateProvider.state('contacts', {
  template: ...,
  controller: 'ContactsCtrl'
})
```


**����ֵ**
$stateProvider

**����˵��**
```
$stateProvider
    .state('contacts', {
        url: "/contacts",
        templateUrl: 'contacts.html'
    })
```
�������Ƿ��ʵ�ҳ����index.html
�����Ƿ���http://xxxx#/contacts�����·�ɹ���ƥ�䵽����Ӧ��ģ��ᱻ�ĳ��div[ui-view]�С�
`contacts״̬������`��ʹ��contacts.html�е��������ui-view�е����ݡ�
���ߵ�����ͨ��transitionto(contacts)״̬��ʱ��url��� index.html/contacts

## $urlRouterProvider
**����**
$urlRouterProvider�������$location����$location�ı��$urlRouterProvider����һ���б�һ����һ������ƥ���ֱ���ҵ���

**��Ҫ�ķ���**
`when() for redirection �ض���`
    ������
    what String | RegExp | UrlMatcher�������ض���Ĵ���·��
    handler String | Function ��Ҫ�ض��򵽵�·��
    
handler ��Ϊ String
    ���handler���ַ�����������Ϊһ���ض��򣬲��Ҹ���ƥ���﷨�����ض���ĵ�ַ��

handler ��Ϊ Function
���handler��һ�����������������ע��һЩ����ġ����$locationƥ��ɹ��������������á������ѡ����ע��$match��
�������Է��أ�
falsy ��������ƥ�䣬$urlRouter����ͼѰ����һ��ƥ��
String ���ַ�����Ϊ�ض����ַ������Ϊ�������ݸ�$location.url()
nothing�����κ�Ϊ���ֵ������$urlRouterurl �Ѿ�������
ʾ��
```
$urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
    if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
        $state.transitionTo(state, $match, false);
    }
}]);
```

`otherwise() ��Ч·��`
������

* path String | Function �����ض���url·������һ����������url·�����������԰���$injector��$location����������

```
app.config(function($urlRouterProvider){
    // �����ã�״̬���ú�when()��������û���ҵ�url���κ�ƥ��
    // otherwise will take care of routing the user to the specified url
    $urlRouterProvider.otherwise('/index');
    // Example of using function rule as param
    $urlRouterProvider.otherwise(function($injector, $location){
        ... some advanced code...
    });
})
```

`rule() �Զ���url����`
������
handler Function һ������������$injector��$location����������Ϊ�������������𷵻�һ����Ч��·�����ַ���

```
app.config(function($urlRouterProvider){
    // Here's an example of how you might allow case insensitive urls
    $urlRouterProvider.rule(function ($injector, $location) {
        var path = $location.path(), normalized = path.toLowerCase();
        if (path != normalized) return normalized;
    });
})
```

## ui-sref ָ�����ӵ��ض�״̬
```
<a ui-sref="home">Home</a>
<a ui-sref="about">About</a>
<a ui-sref="contacts.list">Contacts</a>
```


#### 1:·����Ӧ
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
2 :����״̬PageTabe
$stateProvider.state('PageTabe',{
         url:'/PageTab',
         templateUrl:'PageTab.html'
     })
     
     
#### ��·�ɣ���·��
 
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
Page1��һ��������·�ɣ����ʱ��ҳ�������������ʾ

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
���ʱ��Ͳ�����������ʾ������`PageTabe.Page1`,���븸·���ȼ���ſ��ԡ�


#### ����·����·���Ķ�Ӧ��ϵ
�������ļ�
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
html�ļ�ͨ��`href`�ļ�����
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
ע������`#/PageTab/Page1`,����������PageTab��Page1״̬֮�䶨���˸��ӹ�ϵ�����˵Ҫʹ�����ַ�ʽ����

��������������`ui-sref`�����롣
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










�ο����ף�
http://www.oschina.net/translate/angularjs-ui-router-nested-routes?print
http://bubkoo.com/2014/01/02/angular/ui-router/guide/url-routing/
https://github.com/angular-ui/ui-router/wiki
http://www.aichengxu.com/view/44576
http://sentsin.com/web/1136.html  (Դ�����)

