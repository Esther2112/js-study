alert('~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]\n================================');

var cnt = 1;
var quiz = 0;
var ans = 0;
while (true) {
    var num1 = Math.floor(Math.random() * 100) + 1;
    var num2 = Math.floor(Math.random() * 100) + 1;
    while (num1 === num2) {
        num2 = Math.floor(Math.random() * 100) + 1;
    }
    quiz = num1 + num2;
    ans = +prompt(`Q${cnt}. ${num1} + ${num2} = ??`);
    if (ans === 0) {
        alert('게임을 종료합니다');
        break;
    } else if (quiz === ans) {
        alert('정답입니다!');
    } else {
        alert('틀렸어요~');
    }
    cnt++;
}