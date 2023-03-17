
var pets = ['멍멍이', '야옹이', '쩝쩝이'];


console.log(pets);

//pets[3] = '징징이'; //java에서는 안되는데 js는 이런식으로 배열 요소를 추가할 수 있다..
// pets[pets.length] = '징징이'; 
//이런식으로 배열 요소를 추가하면 인덱스만 추가되는게 아니라 배열이 새로운 주소값을 갖게됨

pets.push('징징이'); //정상적으로 배열의 맨 뒤에 인덱스가 추가됨
pets.push('거부기', '콩콩이', '몇개든', '나열가능');

console.log(pets);

//맨 끝 데이터 삭제
pets.pop();
console.log(pets);

//shift() : 배열의 맨 첫번째 요소 제거
pets.shift();
console.log(pets);

//unshift(): 배열에 맨 첫번째 데이터 추가
pets.unshift('짝짝이');
console.log(pets);
