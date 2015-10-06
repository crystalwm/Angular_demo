/**
 * Created by John on 2015-10-02.
 */
var express = require('express');
var url = require('url');
var path=require('path');
var swig=require('swig');
var fs=require('fs');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
//����ģ������
app.engine('html',swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//����body����
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * ��Ҫ��json�л�ȡ���ݣ�Ȼ��ѻ�ȡ�����ݷ���ǰ̨
 * */



//�������е�����
app.get('/getGoodslist',function(req,res){
    var data=fs.readFileSync('./json/goodslist.json','utf-8');
    res.send(data);
});

app.get('/',function(req,res){
    res.render('index');
});


app.listen(3000);
console.log("Server runing at port: " + '3000' + ".");