/**
 * Created by John on 2015-10-01.
 */

var http=require('http');
var url=require('url');
var path=require('path');
var fs=require('fs');
var querystring=require('querystring');

var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    if(pathname=='/'){
        //返回的是index.html页面
        res.writeHead(200, { 'content-type': 'text/html' })

        //fs.createReadStream('D:\WebStorm9.0.2\\learnnode\\public\\txt\\test_http_file_server.txt').pipe(res)
        res.write(fs.readFileSync('./index.html'));
        res.end();

    }
    //如果pathname=='/name'返回的是ok
    if(pathname=='/name'){
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.write('ok');
        res.end();

    }

});

server.listen(8022);
console.log("Server runing at port: " + '8022' + ".");

//console.log(path.join('./','index.html'));
