/**
 * Created by R9K0H46 on 2015/10/16.
 */

var express = require('express');
var url = require('url');
var path=require('path');
var session=require('express-session');
var swig=require('swig');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var FileStore = require('session-file-store')(session);
var logger = require('morgan');
var app = express();
app.use(express.static(path.join(__dirname, 'src')));


//引用模板引擎
app.engine('html',swig.renderFile);
app.set('views', path.join(__dirname, 'src/tpls'));
app.set('view engine', 'html');


app.use(logger('dev'));
//引入body对象
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser('keyboard cat'));
app.use(express.static(path.join(__dirname, 'public')));

//使用session和flash
app.use(session({ cookie: { maxAge: 600000 },
    store: new FileStore() ,
    resave: false,
    saveUninitialized: true ,
    secret: 'keyboard cat'
    //   cookie: { secure: true }

}));
app.use(flash());

//用户

var users=[{
    username:'tomtom',
    password:'tomtom'
},{
    username:'sun',
    password:'sun'
}];

/**
 * 首页信息，除了一些资源文件的处理之外，一些其他的信息都是需要经过nodejs进行处理的。
 * 所以nodejs的作用相同于是把所有的请求进行过滤，然后得到我想要的结果。
 * */
app.get('/',function(req,res){
    res.render('index');
});
app.get('/loginForm.html',function(req,res){
    res.render('loginForm');
});



//查看图书列表详情页面
app.get('/bookList.html',function(req,res){
    console.log('跳转到了新的页面');
    console.log('flash-success:'+req.flash('success').toString());
    console.log('session-user:'+req.session.user);
    console.log('flash-error:'+req.flash('error').toString());
    res.render('bookList',{
        success:req.flash('success').toString(),
        user:req.session.user,
        error:req.flash('error').toString()
    });
});


//用户登录验证
app.post('/login',function(req,res){
    console.log("用户名："+req.body.userName);
    var newUser={
            username:req.body.username,
            password:req.body.password
        };
 /**
  *检查用户是否存在，如果存在的话，则跳转到booklist页面中
  * 如果不存在的话，则跳转到登录页面
  * */
 var flag=0;
 users.forEach(function(value){
     if(value.username==newUser.username && value.password==newUser.password){
         flag=1;
         //用户名和密码都匹配之后，将用户信息存放在session中
         req.session.user=newUser;   //用户信息存放在session中
         req.flash('success','登录成功！');
         console.log('登录成功');
         //return res.redirect('/bookList.html');    //登录成功之后跳转到主页
         res.render('bookList',{
             success:req.flash('success').toString(),
             user:req.session.user,
             error:req.flash('error').toString()
         });
     }

 });
    //没有找到对应的用户
    if(flag==0){
        req.flash('error','用户不存在');
        console.log('登录失败');
       return  res.redirect('/') ;  //用户不存在则跳转到登录页面
    }
});

function checkNotLogin(req,res,next){
    /**
     *当用户没有登录，才能进行下一步的操作
     */
    if(req.session.user){
        req.flash('error','已登录!');
        res.redirect('/');
    }
    next();
}

app.listen(3000);
console.log("Server runing at port: " + '3000' + ".");