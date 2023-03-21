//const는 상수 타입이기 때문에 선언과 함께 초기화가 필수
// const PI;
const PI = 3.14;
// 상수이므로 값 변경이 불가
// PI = 2;

const kim = {
    name : '김철수',
    age: 25
};

kim.name = '김칠리';

//객체 불변성을 지켜준다
// kim = {
//     name: '김철수',
//     age: 25
// }

const a = 10;
const b = 20;

for(let i = 0; i < 5; i++) {
    //const로 하면 i++ 적용이 불가하므로 for 제어변수는 let으로 선언
}