
//50000번의 루프 중 1~100 사이의 랜덤숫자중 30이 나오면 반복을 중단
for(var i = 0; i < 50000; i++){
    var rn = Math.floor(Math.random()*100)+1;
    console.log(rn);
    if(rn === 30) {
        console.log(`반복문 종료: ${i}`);
        break;
    }
}


//중첩반복문 탈출 --> 내부 for문의 break는 내부 포문만을 탈출, 외부 for문에서 다시 반복
//outer, inner 등 각 포문에 label을 선언 후 break label을 명령하면 해당 반복문 외부로 탈출한다.
outer: for(var i = 0; i < 3; i++){
    inner: for(var j = 0; j < 2; j++){
        if(i === j){
            break outer;
        }
        console.log(`[${i}, ${j}]`);
    }
}
console.log(`=====================================`);
