
protractor��Ҫ�����ļ���spec�ļ���config�ļ�

## spec�ļ�
��spec�ļ���ʹ�õ��ǲ��Կ�ܵ����ԣ���protractor�е��﷨

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
### ȫ�ֱ���
* browser
    * WebDriverʵ���İ�װ��������ҳ����Ϣ�͵���
    * browser.get()����һ��ҳ�棬���ҳ����û��AngularJS�İ��Ļ����ᱨ��
    * brower.driver()����һ��ҳ�棬����Ҫ��ҳ������û��AngularJS�İ���
* element
    * �������������Ҳ���ҳ���DOMԪ�ػ��ߺͲ���ҳ���DOMԪ�ؽ��н�����
* by
    * Ԫ�ض�λ���Լ���(cssѡ������ng-module�󶨵�����)
* protracotr
    * ��̬���������ࡣ���� ```protractor.Key``` 

## Config�ļ�
* ���ã�����Selenium������ȥ�����Ǹ���������������ʹ���Ǹ����Կ�ܣ�ʹ���Ǹ��������
    