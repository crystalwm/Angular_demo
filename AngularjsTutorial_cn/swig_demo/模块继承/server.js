/**
 * Created by R9K0H46 on 2015/9/18.
 */


var http=require('http');
var url=require('url');
var swig=require('swig');

var server=http.createServer(function(req,res){
    var path=url.parse(req.url).path;

    console.log(path);

    if(path=='/layout.html'){
            var tmp_layout=swig.compileFile(__dirname+'/layout.html');
            var renderHtml_layout=tmp_layout({
                title:"layout",
                head:"layout_head",
                content:"layoutlayout"
            });

        console.log(renderHtml_layout);

        res.writeHead(200,{'content-Type':'text/html'});
        res.end(renderHtml_layout);
    }

    if(path=='/index.html'){
        var tmp_index=swig.compileFile(__dirname+'/index.html');
        var renderHtml_index=tmp_index({});
        console.log(renderHtml_index);
        res.writeHead(200,{'content-type':'text/html'});
        res.end(renderHtml_index);
    }


    console.log(url.parse(req.url));


});

server.listen('1338');

console.log('Application Started on http://localhost:1338/');