var num = Math.floor(Math.random()*50)+1;
var ans = +prompt('~~~~~~~~~~~~재미있는 UP&DOWN 게임~~~~~~~~~~~~\n[1 ~ 50 사이의 무작위 숫자를 맞혀보세요!!!]');
var min = 1;
var max = 50;
while(num !== ans) {
    if(num > ans) {
        if (min < ans) {
            min = ans
        }
        ans = +prompt(`UP!!! [${min} ~ ${max}]`);
    } else if (num < ans) {
        if (max > ans) {
          max = ans
        }
        ans = +prompt(`DOWN!!! [${min} ~ ${max}]`);
    } 
}
alert('정답!')