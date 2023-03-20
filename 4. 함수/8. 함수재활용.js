

//배열의 특정 데이터의 인덱스를 구하는 함수
function myIndexOf(arr, element){
    for (var i = 0; i < arr.length; i++){
        if(element === arr[i]) {
            return i;
        }
    }
    return -1;
}

//배열에 특정 데이터가 존재하는지 구하는 함수
function myIncludes(arr, element){
    return myIndexOf(arr, element) !== -1;
}


var foodList = ['짜장면', '탕수육', '잡채', '족발'];
var idx = myIncludes(foodList, '잡채');
console.log(idx);
