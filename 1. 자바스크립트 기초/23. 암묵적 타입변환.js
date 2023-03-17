

// var n1 = '10';
// var n2 = '20';
// console.log(n1 + n2); //1020 출력

var n1 = 10;
var n2 = '20';
console.log(n1 + n2);//number + string = string -> 1020 출력

var n3 = n1 + '';
console.log(typeof n3);//string

var n4 = '100' - 55;
console.log(n4);//js엔진은 빼기(-), 곱하기(*) 연산인 경우 숫자로 형변환 해준다.

var n5 = +'99';
console.log(typeof n5);// + 부호 붙이면 숫자로 형변환

console.log('-------------------------------------------------------');

// js에서는 0, '', null, undefined, NaN는 거짓으로 판단한다
// Falsy
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');

// Truthy
if (1) console.log('ok6');
if (-100.55) console.log('ok7');
if ('   ') console.log('ok8');
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10');