var num = +prompt("정사각형을 그립니다.\n높이는 얼마입니까?");
var st = '';
for(var i = 0; i < num; i++){
    for(var j = 0; j < num; j++) {
        st += ' * ';
    }
    st += '\n';
}
alert(st);