//함수 선언문 방식
// function multi(n1, n2) {
//     return n1 * n2;
// }

// 함수 표현식
// const multi = function (n1, n2) {
//     return n1 * n2;
// }

//화살표 함수
const multi = (n1, n2) => n1 * n2;

const r1 = multi(10, 3);
console.log(`r1: ${r1}`);


// function sayHello () {
//     console.log(`안녕하세요`);
// }

const sayHello = () => console.log(`안녕하세요`);
sayHello();

const kim = {
  name: '김철수',
  age: 30,
  greeting: sayHello,
  dance: function () {
    console.log(`신나게 춤을 춥니다`);
  },
};

kim.greeting();
kim.dance();

//정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는 화살표 함수 pow 작성
const pow = number => number ** 2;
console.log(pow(4));


console.log('==============================================');
//함수 선언문과 함수 표현식(화살표함수 포함)의 차이

//함수 선언문 위에서도 호출이 가능. 함수도 호이스팅이 됨..
//--> 내부함수가 아닌 공개된 함수(라이브러리 등)는 보통 함수선언문을 사용한다.
const r3 = sub(20, 10);
console.log(`r2 : ${r3}`);

function sub(n1, n2) {
  return n1 - n2;
}
//함수 선언문 아래에서 호출
const r2 = sub(20, 10);
console.log(`r2 : ${r2}`);


//함수표현식 위에서는 호출 안됨
// const r5 = divide(30, 6); 
// console.log(`r4 : ${r5}`);
const divide = (n1, n2)  => n1 / n2;
//함수표현식 아래에서 호출
const r4 = divide(30, 6); 
console.log(`r4 : ${r4}`);
