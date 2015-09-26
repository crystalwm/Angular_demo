
protractor需要两个文件：spec文件和config文件

## spec文件
在spec文件中使用的是测试框架的语言，和protractor中的语法

```
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    // Load the AngularJS homepage.
    browser.get('http://www.angularjs.org');

    // Find the element with ng-model matching 'yourName' - this will
    // find the <input type="text" ng-model="yourName"/> element - and then
    // type 'Julie' into it.
    element(by.model('yourName')).sendKeys('Julie');

    // Find the element with binding matching 'yourName' - this will
    // find the <h1>Hello {{yourName}}!</h1> element.
    var greeting = element(by.binding('yourName'));

    // Assert that the text element has the expected value.
    // Protractor patches 'expect' to understand promises.

    expect(greeting.getText()).toEqual('Hello Julie!');
  });
});
```
### 全局变量
* browser
    * WebDriver实例的包装器，用于页面信息和导航
    * browser.get()加载一个页面，如果页面中没有AngularJS的包的话，会报错
    * brower.driver()加载一个页面，不需要管页面中有没有AngularJS的包。
* element
    * 帮助函数，查找测试页面的DOM元素或者和测试页面的DOM元素进行交互。
* by
    * 元素定位策略集合(css选择器、ng-module绑定的属性)
* protracotr
    * 静态变量或者类。比如 ```protractor.Key``` 

## Config文件
* 作用：设置Selenium服务器去运行那个测试用例，设置使用那个测试框架，使用那个浏览器。
    