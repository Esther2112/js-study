function add(n1, n2) {
    return n1 + n2; //탈출문
    //함수 실행 중 return을 만나면 함수를 탈출하므로 return 아래에 작성된 코드는 동작하지 않는다.
}

//반환값: 함수 호출 이후에 함수 밖으로 전달되는 값
var result = add(5, 7);

//리턴이 없는 함수 (void 함수) ==> 변수에 담지 않고 단독 호출, 다른 함수에 인수로 전달 X
//소비함수(consume함수)
function multi(n1, n2) {
    var result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}
multi(10, 3);


//return 탈출문
function callName(nickName) {
    var prohibits = ['멍청이', '돌아이', '홍길동'];
    if (prohibits.includes(nickName)) {
        console.log(`잘못된 닉네임은 인사를 못해줘 이놈아`);
        return;
    }
    console.log(`${nickName}님 안녕하세요~`);
}
callName('돌아이');

function stopLoop() {

    while (true) {
        var flag = prompt(`명령어를 입력하세요!`);
        if (flag === '멈춰') {
            return; //break는 가장 가까운 반복문 탈출, return은 더 강력하게 함수 탈출
        }
        alert(flag);
    }
    alert(`수고용~`);
}

stopLoop();