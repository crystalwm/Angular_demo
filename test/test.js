/**
 * Created by John on 2015-09-28.
 */
var a="b abc b a a";
console.log(tongji(a));

function tongji(a){
    var arrlist= a.split(' ');
    var vector=[];
    var vector_index=[];
    arrlist.forEach(function(value){
        if(vector.indexOf(value)==-1){
            //如果没有找到
            vector.push(value);
            vector_index.push(1);
        }
        else{
            //如果找到，对应的index+1
            vector_index[vector.indexOf(value)]++;
        }
    })
    vector_index.sort(compareForSort);

    return vector_index;

}
function compareForSort(a,b){
    return a-b;
}