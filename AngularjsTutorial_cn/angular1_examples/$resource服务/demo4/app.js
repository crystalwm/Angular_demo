/**
 * Created by John on 2015-10-02.
 */
var express = require('express');
var url = require('url');
var path=require('path');
var swig=require('swig');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
//设置模块引擎
app.engine('html',swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//引入body对象
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * 1:模拟卡片的信息，cards
 * 2；定义获取某个具体的id的时候，返回的数据
 * 3：定义返回所有的路径的时候返回的数据
 *
 * */
var cards=[
    {
        id:1,
        name:'建设银行',
        amount:0
    },
    {
        id:2,
        name:'中国银行',
        amount:0
    },
    {
        id:3,
        name:'上海银行',
        amount:0
    }
];

//当为某一个具体的id的时候，返回该id对应的数据
app.get('/card/user/123/:id',function(req,res){
    var data=cards[req.params.id-1];
    res.send(data);
});

//返回所有的数据
app.get('/card/user/123',function(req,res){
    res.send(data);
});

app.get('/',function(req,res){
    res.render('index');
});
//存储修改的数据
app.post('/card/user/123/:id',function(req,res){
    /**
     * 1:获取id的值，
     * 2：存取传递过来的参数
     * 3：返回更新之后的结果
     * */
    var index=req.params.id-1;
    console.log(req.body);
    cards[index]=req.body;
    console.log(cards[index]);
    res.send(cards[index]);

});

app.listen(3000);
console.log("Server runing at port: " + '3000' + ".");