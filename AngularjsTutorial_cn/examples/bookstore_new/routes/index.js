var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



//�û�

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
router.get('/',function(req,res){
  res.render('index');
});
router.get('/loginForm.html',function(req,res){
  res.render('loginForm');
});


//查看图书列表详情页面
router.get('/bookList.html',function(req,res){
  res.render('bookList',{
    success:req.flash('success').toString(),
    user:req.session.user,
    error:req.flash('error').toString()
  });
});


//用户登录验证
router.post('/login',function(req,res){

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
      req.flash('success','登录成功');
      res.redirect('/bookList.html');
    }

  });
  //没有找到对应的用户
  if(flag==0){
    req.flash('error','用户不存在');
    console.log('登录失败');
    res.redirect('/') ;  //用户不存在则跳转到登录页面
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



module.exports = router;
