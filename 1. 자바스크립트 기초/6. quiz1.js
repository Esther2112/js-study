//prompt("첫번째 숫자를 입력");
//prompt("두번째 숫자를 입력");
//a부터 b까지의 누적 합 :
//거꾸로 써도 답 나와야함

var a = +prompt('첫번째 숫자를 입력');
var b = +prompt('두번째 숫자를 입력');
var max = a > b ? a : b;
var min = a < b ? a : b;
var total = 0;

while(min <= max ) {
    total += min;
    min++;
}
alert(`${a}부터 ${b}까지의 누적 합: ${total}`);