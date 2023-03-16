var cnt = 0;
var level =  +prompt(`난이도를 설정하세요~~\n[1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번) ]`);
if(level === 1) {
    cnt = 3;
}else if(level === 2) {
    cnt = 6;
}else {
    cnt = 10;
}
var num = Math.floor(Math.random()*50)+1;
var ans = +prompt(`[1 ~ 50 사이의 무작위 숫자를 ${cnt}번 안에 맞혀보세요!!!]`);
var min = 1;
var max = 50;
while(true) {
    cnt--;
    if(num === ans){
        alert('정답!');
        break;
    }else if(num > ans) {
        if (min < ans) {
            min = ans;
        }
        ans = +prompt(`UP!!! [${min} ~ ${max}]\n기회가 ${cnt}번 남았습니다`);
    } else {
        if (max > ans) {
          max = ans;
        }
        ans = +prompt(`DOWN!!! [${min} ~ ${max}]\n기회가 ${cnt}번 남았습니다`);
    }

    if(cnt === 1) {
        alert('5번 다 썼습니다. 틀렸엉');
        break;
    }
}