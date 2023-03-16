alert('~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]\n================================');

var cnt = 1;
var corr = 0;
var wrong = 0;
var quiz = 0;
var ans = 0;
while (true) {
    var num1 = Math.floor(Math.random() * 100) + 1;
    var num2 = Math.floor(Math.random() * 100) + 1;
    while (num1 === num2) {
        num2 = Math.floor(Math.random() * 100) + 1;
    }
    if(num2 > num1){
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }

    var calc = Math.floor(Math.random() * 4);
    if (calc === 0) {
        quiz = num1 + num2;
        calc = '+';
    }else if (calc === 1) {
        quiz = num1 - num2;
        calc = '-';
    }else if (calc === 2) {
        quiz = num1 * num2;
        calc = '*';
    }else {
        quiz = num1 / num2;
        calc = '/';
    }
    ans = +prompt(`Q${cnt}. ${num1} ${calc} ${num2} = ??`);

    if (ans === 0) {
        alert(`게임을 종료합니다\n--------------------\n정답횟수: ${corr}회, 틀린 횟수: ${wrong}회`);
        break;
    } else if (quiz === ans) {
        alert('정답입니다!');
        corr++;
    } else {
        alert('틀렸어요~');
        wrong++;
    }
    cnt++;
}