//변수 정의, 함수 정의만
//단독으로 외부함수 호출 X

let x = 'bar';
// console.log(x);

function add(n1, n2){
    console.log(`${n1} + ${n1} = ${n1 + n2}`);
}

//여기서 정의된 변수와 함수를 내보내기
export { x, add };