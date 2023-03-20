
//multi-parameter: 매개변수가 n개인 경우

//집합 자료구조를 매개변수로 사용
//배열, 객체

//n개의 정수를 전달하면 해달 정수의 총합을 구해주는 함수
//스프레드(ES6)
function addAll(...numbers){
    var total = 0;
    for (var n of numbers){
        total += n;
    }
    return total;
}

//var r1 = addAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var r1 = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//매개변수에 ...를 찍으면 [] 생략 가능
console.log(`r1: ${r1}`);


function foo(arr1, arr2){

}

foo([10, 20], [500, 1000, 1500]);
//배열 두개를 인수로 전달할 때는 [] 생략시 구분이 불가하므로 매개변수 자리에 ...을 쓸 수 없다.