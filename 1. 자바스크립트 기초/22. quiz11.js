var HIGH = 1,
    MIDDLE = 2,
    LOW = 3;
var level = +prompt('~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]\n================================\n난이도를 설정하세요~~\n[1. 상 (1 ~ 100) | 2. 중 (1 ~ 50) | 3. 하 (1 ~ 20)]');
var NUMBER_RANGE = 0;
if (level === HIGH) {
    NUMBER_RANGE = 100;
} else if (level === MIDDLE) {
    NUMBER_RANGE = 50;
} else {
    NUMBER_RANGE = 20;
}
var cnt = 1;
var corr = 0;
var wrong = 0;
var quiz = 0;
var ans = 1;
while (ans !== 0) {
    var num1 = Math.floor(Math.random() * NUMBER_RANGE) + 1;
    var num2 = Math.floor(Math.random() * NUMBER_RANGE) + 1;
    while (num1 === num2) {
        num2 = Math.floor(Math.random() * NUMBER_RANGE) + 1;
    }
    if (num2 > num1) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }

    var calc = Math.floor(Math.random() * 4);
    var func = '';
    if (calc === 0) {
        quiz = num1 + num2;
        func = '+';
    } else if (calc === 1) {
        quiz = num1 - num2;
        func = '-';
    } else if (calc === 2) {
        quiz = num1 * num2;
        func = '*';
    } else {
        quiz = num1 / num2;
        func = '/';
    }
    
    var nthTry = 0;
    var retry = true;
    while (retry) {
        nthTry++;
        if(nthTry === 11) {
            retry = false;
            alert('넌 이문제 평생 못 푼다...넘어가자^^;');
            break;
        }
        ans = +prompt(`Q${cnt}. ${num1} ${func} ${num2} = ?? *[${nthTry}트]`);

        if (ans === 0) {
            alert(`게임을 종료합니다\n--------------------\n정답횟수: ${corr}회, 틀린 횟수: ${wrong}회`);
            retry = false;
            break;
        } else if (quiz === ans) {
            alert(`정답입니다! ${nthTry}번만에 맞힘!`);
            retry = false;
            corr++;
        } else {
            alert('틀렸어요~');
            wrong++;
            retry = confirm('재도전?');
        }
    }
    cnt++;
}