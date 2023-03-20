/*
    description: x ~ y까지의 총합을 구하는 함수
    parameter:
        - start: 누적 총합의 시작값
        - end: 누적 총합의 끝값
    return: 계산된 총합

*/

// 매개변수(parameter): 함수를 정의할 때 외부에서 받아오는 값을 저장할 변수
function calcRangeTotal(start, end) {

    console.log(`x: ${start}, y: ${end}`);

    var total = 0;
    for (var i = start; i <= end; i++) {
        total += i;
    }
    return total;

}

//인수(argument): 함수를 호출할때 함수에게 전달하는 값이나 표현식
var result1 = calcRangeTotal(1, 10);
console.log(result1);

//매개변수의 기본값
//ES6
function sayHello(language = '한국어') {
    //ES5
    language = language || '한국어'; //매개변수에 아무런 값도 넣지 않았을때 한국어를 default로 갖게 함

    if (language === '한국어') {
        console.log('안녕하세요!');
    } else if (language === '영어') {
        console.log('hello ~');
    } else if (language === '중국어') {
        console.log('따쟈하오');
    } else {
        console.log('크크루삥뽕');
    }

}


sayHello();

function mySlice(arr, start, end) {
    //사본 배열 생성
    var copyArr = [];
    for(var i = start; i < end; i++) {
        copyArr.push(arr[i]);
    }
    return copyArr;
}

var newArr = mySlice([10, 20, 30, 40, 50], 1, 3);
console.log(newArr);

//매개변수가 없는 함수
function selectRandomPet(){
    var pets = ['멍멍이', '짹짹이', '꽥꽥이', '어흥이'];
    var randomIndex = Math.floor(Math.random() * pets.length);
    return pets[randomIndex];
}
console.log(selectRandomPet());

