var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var session=require('express-session');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig=require('swig');
var flash = require('connect-flash');
var FileStore = require('session-file-store')(session);


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
//����ģ������
app.engine('html',swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');



app.use(logger('dev'));
//����body����
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser('keyboard cat'));
//������Դ���ڵ�λ��
app.use(express.static(path.join(__dirname, 'public')));

//ʹ��session��flash
app.use(session({ cookie: { maxAge: 600000 },
  store: new FileStore() ,
  resave: false,
  saveUninitialized: true ,
  secret: 'keyboard cat'
  //   cookie: { secure: true }

}));
app.use(flash());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var server = app.listen(3002, function() {
  console.log('Listening on port %d', server.address().port);
});


//module.exports = app;
