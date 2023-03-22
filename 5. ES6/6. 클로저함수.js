//자바스크립트 함수는 함수를 리턴할 수 있음
/*
function calculator(n1, n2){
    function add(){
        return n1 + n2;
    }

    return add;
}
*/
const calculator = (n1, n2) => () => n1 + n2;

const zzz = calculator(10, 20);
console.log(typeof zzz);
const n = zzz();
console.log(`n: ${n}`);

/*
let count = 0; // 카운팅 변수 (전역 변수)

// 카운트를 올리는 함수
const increase = () => ++count;

console.log(increase());
console.log(increase());

count = 999;

console.log(increase()); // 3??
*/


/*
const increase = () => {
    let count = 0;
    return ++count;
}
console.log(increase());
console.log(increase());
console.log(increase());//3? -> 누적 안되고 1 계속 출력됨
*/

//상태유지가 필요한 변수들을 클로져를 사용하여 보호
/*
const increaseClosure = () => {

    let count = 0; //지역변수
    return () => ++count;
}

const increase = increaseClosure();
console.log(increase());
console.log(increase());
count = 999;
console.log(increase());
console.log(count);
*/

//즉시 실행 함수: 정의와 동시에 호출
const result = (function(n1, n2) { 
    return n1 + n2;
})(5, 8);

const increase = (() => {
    let count = 0;
    return () => ++count;
})();
console.log(increase());
console.log(increase());
console.log(increase());