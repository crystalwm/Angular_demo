### ʲô��requireJS
RequireJS ��һ��JavaScriptģ���������

### requireJS������
* ��1��ʵ��js�ļ����첽���أ�������ҳʧȥ��Ӧ��
* ��2������ģ��֮��������ԣ����ڴ���ı�д��ά����

### ����requireJS
#### �������
```
<script src="js/require.js" data-main="js/main.js"></script>
```
data-main���Ե������ǣ�ָ����ҳ�������ģ�顣�������У�����jsĿ¼�����main.js������ļ����һ����require.js����

#### ����������ģ��--require()
```
// main.js
����require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
��������// some code here
����});
```
* ��һ������
    * ��һ��������һ�����飬��ʾ��������ģ�飬��������['moduleA', 'moduleB', 'moduleC']������ģ������������ģ�飻
* �ڶ�������
    * �ڶ���������һ���ص���������ǰ��ָ����ģ�鶼���سɹ������������á����ص�ģ����Բ�����ʽ����ú�����
    �Ӷ��ڻص������ڲ��Ϳ���ʹ����Щģ�顣

#### ����ģ���·��---require.config()
����js�ļ����Ƿ���libĿ¼�µ�
```
����require.config({
��������paths: {
������������"jquery": "lib/jquery.min",
������������"underscore": "lib/underscore.min",
������������"backbone": "lib/backbone.min"
��������}
����});
```
������ͨ��ָ����Ŀ¼(baseUrl)�ķ�ʽ
```
����require.config({
��������baseUrl: "js/lib",
��������paths: {
������������"jquery": "jquery.min",
������������"underscore": "underscore.min",
������������"backbone": "backbone.min"
��������}
����});
```
���ĳ��ģ������һ̨�����ϣ�Ҳ����ֱ��ָ��������ַ�����磺
```
����require.config({
��������paths: {
������������"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"
��������}
����});
```

### requireJS��AMD�淶
* ��AMD�淶�ж���ģ���Ҫ��
����ģ���������ض���define()���������塣���һ��ģ�鲻��������ģ�飬��ô����ֱ�Ӷ�����define()����֮�С�
```
�ٶ�������һ��math.js�ļ�����������һ��mathģ�顣��ô��math.js��Ҫ����д��
����// math.js
����define(function (){
��������var add = function (x,y){
������������return x+y;
��������};
��������return {
������������add: add
��������};
����});
���ط������£�
����// main.js
����require(['math'], function (math){
��������alert(math.add(1,1));
����});
������ģ�黹��������ģ�飬��ôdefine()�����ĵ�һ��������������һ�����飬ָ����ģ��������ԡ�
����define(['myLib'], function(myLib){
��������function foo(){
������������myLib.doSomething();
��������}
��������return {
������������foo : foo
��������};
����});
��require()���������������ģ���ʱ�򣬾ͻ��ȼ���myLib.js�ļ���
```

### requireJS ���طǹ淶��ģ��

���磺underscore��backbone�������⣬��û�в���AMD�淶��д�����Ҫ�������ǵĻ��������ȶ������ǵ�������
```
require.config({
��������shim: {

������������'underscore':{
����������������exports: '_'
������������},
������������'backbone': {
����������������deps: ['underscore', 'jquery'],
����������������exports: 'Backbone'
������������}
��������}
����});
```

require.config()����һ�����ö���������������ǰ��˵����paths����֮�⣬
* shim���ԣ�ר���������ò����ݵ�ģ�顣������˵��ÿ��ģ��Ҫ����
��1��exportsֵ������ı����������������ģ���ⲿ����ʱ�����ƣ�
��2��deps���飬������ģ��������ԡ�



�ο����ף�
http://www.requirejs.cn/
http://www.ruanyifeng.com/blog/2012/11/require_js.html
