在前端的页面总form和grid是两个十分重要的组件。它是其它很多东西的基础。

## from表单

1：如何数据绑定
2：验证表单element eg input select etc
3：显示出错信息
4：整个form的验证
5：避免提交没有验证通过的表单
6：如果防止多次提交


### angularjs中的form
这里的form已经不是原生的HTML表单，而是Angular自己的指令了！

http://docs.ngnice.com/api/ng/directive/form

**设计思想**
传统的表单提交：页面提交之后，整个页面重新加载。
Query提交表单，像这样$('form').submit()。


**angularJS的设计思想**
在提交之间需要用javascript进行一些逻辑判断。
因此form表单中如果没有action属性的话，angularJS会阻止默认行为。（在有action属性的时候例外）


### 在表单中什么时候应该使用ngSubmit，什么时候应该使用ngClick?

* If a form has only one input field then hitting enter in this field triggers form submit (ngSubmit)
* if a form has 2+ input fields and no buttons or input[type=submit] then hitting enter doesn't trigger submit
* if a form has one or more input fields and one or more buttons or input[type=submit] then hitting enter in any of 
the input fields will trigger the click handler on the first button or input[type=submit] (ngClick) and a submit
 handler on the enclosing form (ngSubmit)
 
 
 ### Ng-cloak解决angularJS中的闪烁
 
 ### 表单提交的控制
 ngSubmit指令阻止了表单的默认行为（发送请求到服务器，并重新加载页面）。但是表单中含有`action data-action x-action`属性的时候，
 就不会发生这种情形。
 
 **在jquery中的表单验证的过程**
 1：给提交按钮绑定click事件
 2：如果检查不通过的时候，阻止默认行为。（发送请求到服务器，并重新加载页面）
 
 **在angularJS中问题**
 有一个解决方式是`window.location.assign(getRedirectUrl());`
 自己感觉不是很好，因为这样子的话，就是跳转到什么页面这段代码是可以在客户端看到的。
 
 但是这个应该不是唯一的解决方案吧
 

 参考文献：
 http://damoqiongqiu.iteye.com/blog/1920191
 https://scotch.io/tutorials/angularjs-form-validation
 http://www.cnblogs.com/whitewolf/p/3545203.html
 

 








