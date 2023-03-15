//양의 정수를 입력
//+-반복 숫자만큼 표시
var num = +prompt('양의 정수를 입력');
var int = 1;
var st = '';
while (int <= num) {
    if(int % 2 === 1) {
        st += '+';
    } else {
        st += '-';
    }
    int++;
}
alert(st);