/**
 * Created by John on 2015-09-28.
 */

var ndir=require('ndir');
var fs=requires('fs');
var async=require('async');



var aa=['ddf.jpg','sss.gif'];

//������scripts�ļ����б���
async.eachSeries(aa, function iterator(item, callback) {
    ndir.walk('./', function onDir(dirpath, files) {
        console.log(' * %s', dirpath);
        for (var i = 0, l = files.length; i < l; i++) {
            var info = files[i];
            if (info[1].isFile() && info[0].slice(-5)=='.html') {

            }
        }
    }, function end() {
        console.log('walk end public.');
    }, function error(err, errPath) {
        console.error('%s error: %s', errPath, err);
    });

}, function done() {

    console.log('�������������');
    //...
});

//������less�ļ����б���
//������html�ļ��б���




ndir.walk('./', function onDir(dirpath, files) {
    console.log(' * %s', dirpath);
    for (var i = 0, l = files.length; i < l; i++) {
        var info = files[i];
        if (info[1].isFile() && info[0].slice(-5)=='.html') {

        }
    }
}, function end() {
    console.log('walk end public.');
}, function error(err, errPath) {
    console.error('%s error: %s', errPath, err);
});

function ifExists(path,img){
    var content=fs.readFileSync(path,'utf-8');
    var index=content.search(img);
    //û���ҵ�ָ����ͼƬ
    if(index==-1)
    {
        return false;
    }
    else{
        //�ҵ���ָ����ͼƬ
        return true;
    }
}


