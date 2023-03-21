var x = 10; // 전역변수 : 프로그램의 전체영역에서 사용 가능

//매개변수도 지역스코프를 가진다
function foo(z) {
    console.log(`지역변수 x 선언 전 x: ${x}`);
    var y = 20 + x; // 지역변수 : 해당 함수 안에서만 사용 가능
    console.log(y - z);
    var x = '홍길동';
    //전역변수와 동일한 타입, 이름의 변수를 선언및 초기화 하는 경우
    //js가 위의 초기화선언을 선언과 초기화로 분리하고 선언을 가장 위로 올림
    //그 결과 5번 라인의 '선언 전 x'log 명령이 undefined로 출력
    //만약 5번 라인의 '선언 전 x'log에서 10을 출력하고 싶다면
    //x = '홍길동';으로 변수 값을 변경해주면 된다.

    console.log(`지역변수 x 선언 후 x: ${x}`);
    // return y;
}

// console.log(y);
foo();
console.log(`함수 호출 후 x의 값: ${x}`); //전역변수가 호출된다

console.log('=============================================');

//중첩함수 : 함수 안에 함수를 정의 (js only)

function outer(m) {
    var n = 'outer local n';
    var v = 'outer local v';
    console.log(m);
    console.log(n);
    console.log(v);

    function inner() { //helper 함수 : 호출이 함수 내부로 제한된다
        console.log(n);
        var m = 'inner local m';
        var v = 'inner loval v';
        console.log(m);
        console.log(v);
    }

    inner();
}

var m = 'global m';

outer('outer param m');













