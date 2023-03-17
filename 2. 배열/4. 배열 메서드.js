var foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];
var count = 0;
var target = '짜장면';
// for (var food of foodList){
//     if(food === target) {
//         break;
//     }
//     count++;
// }
// console.log(`찾은 인덱스 : ${count}`);

//indexOf : 배열의 특정 데이터가 몇번 인덱스에 있는지 탐색
var index = foodList.indexOf(target);
console.log(index);

//slice() : 배열 중 일정 부분을 지정하여 사본배열을 반환
//원본 배열에 영향을 주지 않음
foodList.push('오뎅', '순대국밥');
console.log(foodList);
//1번 인덱스부터 3번 인덱스까지 추출
var slicedfoods = foodList.slice(1, 4);
console.log(slicedfoods);
//2번 인덱스부터 끝까지 추출
var slicedfoods2 = foodList.slice(2);
console.log(slicedfoods2);
//원본배열을 그대로 복사
var slicedfoods3 = foodList.slice();
console.log(slicedfoods3);


console.log('----------------------------------------');

// reverse() : 배열 역순으로 배치, 원본이 변함
var nums = [10, 20, 30, 40, 50];
// nums.reverse();
console.log(nums);

//모범적인 사례
var copyNums = nums.slice();
copyNums.reverse();


console.log('----------------------------------------');
//concat() : 배열 두개를 연결하여 사본을 반환
var arr1 = [10, 20, 30];
var arr2 = [100, 900, 700, 1000];

var concatedArr = arr1.concat(arr2);
console.log(concatedArr);



console.log('----------------------------------------');
//includes() : 배열에 특정 데이터가 존재하는지 확인
var isIncluded = foodList.includes('닭꼬치');
console.log(isIncluded);


console.log('----------------------------------------');
//splice() : 배열의 특정요소 제거 + 삽입
console.log(foodList);
//인덱스 1번부터 2개 제거
foodList.splice(1, 2);
console.log(foodList);

//인덱스 0번을 제거 후 '보쌈' 삽입
foodList.splice(0, 1, '보쌈');
console.log(foodList);

//1번 자리에 마라탕 삽입
foodList.splice(1, 0, '마라탕');
console.log(foodList);

foodList.splice(2, 0, '아이스크림', '떡볶이');
console.log(foodList);
console.log(foodList);

//2번 인덱스부터 끝까지 다 지워
foodList.splice(2);
console.log(foodList);