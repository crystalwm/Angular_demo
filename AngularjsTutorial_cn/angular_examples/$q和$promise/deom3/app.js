/**
 * Created by John on 2015-10-02.
 */
var express = require('express');
var url = require('url');
var path=require('path');
var swig=require('swig');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
//ÉèÖÃÄ£¿éÒıÇæ
app.engine('html',swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/name',function(req,res){
    setTimeout(function(){res.send('ok')},2000)
});
app.get('/',function(req,res){
    res.render('index');
});

app.listen(3000);
console.log("Server runing at port: " + '3000' + ".");