## �ر�����֪ʶ
js�л���֪ʶ�����бȽ���������
1��ԭ��
2��������
3���հ�

## AngularJS����������
�������̵�����ͼ
������ʽ1���Զ�������ʵ��1��;
������ʽ2���ֶ�������ʵ��2��;
������ʽ3�����ng-app(ʵ��3);
��jQuery;
ȫ�ֶ���angular��injector����);

#### ������ʽ1���Զ�������ʵ��1��;
ng-appָ��

#### ������ʽ2���ֶ�������ʵ��2��;
```
var myModule=angular.module("MyModule",[]);
myModule.controller('myCtrl',['$scope',function($scope){
    function($scope){
        $scope.gameName="tom hihi";
    }
}]);
/**
* �ֶ�����angular
*/
angular.element(document).ready(function(){
    angular.bootstrap(document,['MyModule']);
});
```
��������Ҫ��ͨ��`angular.bootstap()`��ʵ���ֶ������Ĺ��̡�

#### ���ng-app(ʵ��3);
һ��ҳ������ж��ngapp 
������ЩngappҪ��ƽ�еĽṹ������Ƕ��

��Ҫ������һ��ҳ����ʹ�ö��ngapp���������ʹ�ã�

### ��������
��4����Ҫ�Ĺ���
1����jquery
2:publishExternalAPI
3:angularInit


## ����ע��ԭ�����:Provider��Injector
1��ΪʲôҪ����ע�룿
2����ϰ��ng����򵥵�����ע�����ӣ�ʵ��ʱ����ע�룩
3��ng������ע�뷽ʽ���ƶ�ʽע�롢��עʽע�룬����ע�룩
4��ֱ��ʹ��$injector(һ�����ʹ��)
5:providerģʽ��ngʵ��
6��provider/factory/service/constant/value/decorator
7:���õ�provider����
8��injectorԴ�����

### 1��ΪʲôҪ����ע�룿

### 2.1�ƶ�ʽע��
```
//�ƶ���ע�룬�����Ĳ������Ʊ���Ҫ�ͱ�ע�������ͬ
var myModule=angular.module('MyModule',[]);
var myCtrl=function($scope){
    $scope.gameName="hell tome";
}
myModule.controller('MyCtrl',MyCtrl);
```

* ������
����ǰ�˿���һ�㶼��ʹ�ù������ߣ�����ǰ�˴������ѹ����
`�ƶ���ע�룬�����Ĳ������Ʊ���Ҫ�ͱ�ע�������ͬ`
��ѹ���Ĺ����У����ܻ�ı亯���Ĳ������ơ�����ڿ��ܻ�����һЩbug��
������ַ�ʽ���Ƽ�ʹ��

### 2.2��עʽע��
```
//�ƶ���ע�룬�����Ĳ������Ʊ���Ҫ�ͱ�ע�������ͬ
var myModule=angular.module('MyModule',[]);
var myCtrl=function($scope1){
    $scope1.gameName="hell tome";
}
myCtrl.$injector=['$scope'];
myModule.controller('MyCtrl',MyCtrl);
```
���ַ�ʽҲ�Ƚ��鷳
### 2.3����ע��
```
var myModule=angular.module('MyModule',[]);
myModule.controller('myCtrl',['$scope',function($scope1){
   $scope1.gameName="tome1";
}]);
```
���ַ�ʽһ�������ǳ��õķ�ʽ��
### $injector
>û�и���� $injector ��ͬ$scope��Դ��������������ģ�

���Ƕ���`angulr.injector()`��һ���˽�
1:publishExternalAPI
```
 function publishExternalAPI(angular){
     extend(angular, {
     ...
     'injector': createInjector,
     ...
     });
 }
```
2:createInjector
```
function createInjector(modulesToLoad){
...
   return {
    invoke: invoke,
    instantiate: instantiate,
    get: getService,
    annotate: annotate
   };
}
```
��������ڿ���̨����`injector`���еķ�������
![dd](./img/angular_injector.jpg)

#### injector.invoke


#### injecotr.annotate
�鿴һ�������Ĳ�����������������ʽ����
�����ʵ��Ҳ�ȽϺ��棬��ͨ��function��toString(),Ȼ��������������ʽʵ�ֵġ�
 
### provider/factory/service/constant/value/decorator
```
  function provider(name, provider_) {
   if (isFunction(provider_) || isArray(provider_)) {
    provider_ = providerInjector.instantiate(provider_);
   }
   if (!provider_.$get) {
    throw Error('Provider ' + name + ' must define $get factory method.');
   }
   return providerCache[name + providerSuffix] = provider_;
  }
  function factory(name, factoryFn) { return provider(name, { $get: factoryFn }); }
  function service(name, constructor) {
   return factory(name, ['$injector', function($injector) {
    return $injector.instantiate(constructor);
   }]);
  }
  function value(name, value) { return factory(name, valueFn(value)); }
```
���Ƿ�����ô���������Ļ�������provider

## ָ���ִ�й��̷���

## $scope��˫�����ݰ󶨷���
