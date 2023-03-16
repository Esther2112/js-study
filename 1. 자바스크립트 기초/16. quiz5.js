var num = Math.floor(Math.random()*50)+1;
var ans = +prompt(`[1 ~ 50 사이의 무작위 숫자를 5번 안에 맞혀보세요!!!]`);
var cnt = 5;
var min = 1;
var max = 50;
while(num !== ans) {
    cnt--;
    if(num > ans) {
        if (min < ans) {
            min = ans;
        }
        ans = +prompt(`UP!!! [${min} ~ ${max}]\n기회가 ${cnt}번 남았습니다`);
    } else if (num < ans) {
        if (max > ans) {
          max = ans;
        }
        ans = +prompt(`DOWN!!! [${min} ~ ${max}]\n기회가 ${cnt}번 남았습니다`);
    } else {
        alert('정답!');
        break;
    } 

    if(num === ans){
        alert('정답!');
        break;
    }
    if(cnt === 1) {
        alert('5번 다 썼습니다. 틀렸엉');
        break;
    }
}