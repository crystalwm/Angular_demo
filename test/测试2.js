/**
 * Created by John on 2015-09-28.
 */

for(var i=0;i<line.length;i++){

}


var total=[];
function InStack(m){
    if(m=='-' || m=='+' ) return 2;
    if(m=='*' || m=='/' ) return 4;
    if(m=='^') return 5;
    if(m=='(') return 0;
    if(m==')') return 7;
    return -1;
}
function OutStack(m){
    if(m=='-' || m=='+' ) return 1;
    if(m=='*' || m=='/' ) return 3;
    if(m=='^') return 6;
    if(m=='(') return 7;
    if(m==')') return 0;
    return -1;
}
function IsEmptyStack(s){
    if(s.length==0)
     return 1;
    else
      return 0;
}

function jisuan(a,b,op){
    var sum=0;
    if(op=='+') sum=a+b;
    if(op=='-') sum=a-b;
    if(op=='*') sum=a*b;
    if(op=='/') sum=a/b;
    if(op='^') sum=Math.pow(a,b);
    total.push(sum);
}