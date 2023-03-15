
var a = 5;
var b = '5';

console.log(a == b);
// 5와 '5'는 다른데 js는 쳐돌아서 true로 대답함

console.log(a === b);
// == 대신 === 을 써야 정신차리고 대답하니까 js에서는 동등비교 연산시 === 사용

console.log(a !== b );
//!= 대신 !== 을 써야 정신차리고 true로 대답함

console.log('===============================');

console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log('false' == false);
console.log(false == '0');
// == 비교는 결과 예측이 어려움. js에서는 == 없다고 생각하고 무지성 === 쓰기
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log('false' === false);
console.log(false === '0');
console.log('===============================');

//문자 대소비교
console.log('ace' < 'ade');