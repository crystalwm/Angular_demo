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
//����ģ������
app.engine('html',swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//����body����
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * 1:ģ�⿨Ƭ����Ϣ��cards
 * 2�������ȡĳ�������id��ʱ�򣬷��ص�����
 * 3�����巵�����е�·����ʱ�򷵻ص�����
 *
 * */
var cards=[
    {
        id:1,
        name:'��������',
        amount:0
    },
    {
        id:2,
        name:'�й�����',
        amount:0
    },
    {
        id:3,
        name:'�Ϻ�����',
        amount:0
    }
];

//��Ϊĳһ�������id��ʱ�򣬷��ظ�id��Ӧ������
app.get('/card/user/123/:id',function(req,res){
    var data=cards[req.params.id-1];
    res.send(data);
});

//�������е�����
app.get('/card/user/123',function(req,res){
    res.send(data);
});

app.get('/',function(req,res){
    res.render('index');
});
//�洢�޸ĵ�����
app.post('/card/user/123/:id',function(req,res){
    /**
     * 1:��ȡid��ֵ��
     * 2����ȡ���ݹ����Ĳ���
     * 3�����ظ���֮��Ľ��
     * */
    var index=req.params.id-1;
    console.log(req.body);
    cards[index]=req.body;
    console.log(cards[index]);
    res.send(cards[index]);

});

app.listen(3000);
console.log("Server runing at port: " + '3000' + ".");