
var a = 10;
var b = a;

a = 15;

console.log(b);//10

var arr1 = [1, 2, 3, 4];//변수 arr1은 배열 자체가 아닌 배열의 주소값을 갖는다
var arr2 = arr1;//arr2에 arr1과 같은 배열의 주소값을 저장

arr1[1] = 999;
arr2[0] = 77;

console.log('arr1:', arr1);
console.log('arr2:', arr2);
//변수 a는 배열의 값이 아닌 주소값을 가지고 있고 
//arr2도 같은 주소값을 가지므로 변경사항이 공유된다.


console.log('-----------------------------------------');

//배열의 생성
//배열 변수 이름 관례 : 복수형, list 어미 사용
var fruits = [
    '오렌지', 
    '라임', 
    '레몬'
]; // [] : 배열 리터럴

console.log(fruits);
console.log(typeof fruits);
console.log(`배열의 데이터 수: ${fruits.length}`);

//유사배열(배열아님)
// var arrayLike = {
//     0:'자몽',
//     1: '포도',
//     2: '한라봉',
//     length: 3,
// };

// console.log(arrayLike);