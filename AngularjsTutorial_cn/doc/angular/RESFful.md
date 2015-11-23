

### 什么是RESTful API
表征性状态传输（Representational State Transfer,简称REST ）是Roy Fielding博士于2000年在他的博士论文中提出来的一种【软件架构风格】。
如果一个架构符合REST原则，就称它为RESTful架构。RESTful架构基于HTTP协议的软件架构风格。
Roy Fielding
几乎可以称之为HTTP协议之父，他是HTTP1.0和1.1的主要设计者，

### 资源（Resources）是REST的核心
REST开发又被称作“面向资源的开发”，这说明对于资源的抽象是设计RESTful API的核心内容。RESTful API建模的过程与面向对象建模类似，
是以名词为核心的。这些名词就是资源，任何可命名的抽象概念都可以定义为一个资源。对于业务的抽象是设计一套好的RESTful API的基础，
这就好比建房子打地基，如果地基没有打好，后面建的楼就很容易歪掉，其美观度，可维护性，可扩展性就会大大折扣。
笔者会建议在设计初期一定要在资源的定义上多花功夫，抽象出适合业务发展的资源。也就是说一开始要把产品的RESTful风格定义下来，
后面的扩展都可以基于这样的风格延续下去。

下面是几条小的建议：
-	理清资源的层次结构，
比如业务针对的范围是学校，那么学校会是一级资源(/school)，老师(/school/teachers)，学生(school/students)就是二级资源。
-	资源尽量用准确的英文名词去表达，资源组都用复数来表达。
一个好的资源定义一定是自解释的，也就是说你只需要很少的先验信息就能理解这个resource资源代表什么意思。

> 感觉和数据库的建表语句比较相似

### 资源的状态转化（State Transfer)
http协议中常见的几个方法
GET－获取资源，
POST－新建或者更新资源，
PUT－更新资源，
DELETE-删除资源。
还有其它不常用的HTTP方法：PATCH/HEAD/OPTIONS方法。

### RESTfull型的资源


### 结语
最后作为结束语，想说明的是一套设计良好的RESTful一定是前后端反复沟通协商并不断迭代的过程。因为RESTful API作为前后端的桥梁我们需要同时考虑前后端的需求并达成一致的一个结果，桥梁之所以成为桥梁一定是双方都认可的沟通方式。架构是一门科学，也是一种艺术。














参考文献：
http://mp.weixin.qq.com/s?__biz=MzIwMDI1MTYwMQ==&mid=211438097&idx=1&sn=116d010e0b6382bb4774650c09744478&scene=0#rd
http://www.ruanyifeng.com/blog/2011/09/restful.html

