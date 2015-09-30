/**
 * Created by John on 2015-09-28.
 */

var map=[];
var line="abcdefghijkl";
var total=0;
map[1]=1;
for(var i=2;i<=12;i++){
    map[i]=map[i-1]*i;
}

for(var j=1;j<=12;j++){
    var k=0;
    for(var k=j+1;k<=12;k++){
        if(line[j]>line[k]) k++;
        total=total+map[12-j]*k;
    }
}

console.log(total);