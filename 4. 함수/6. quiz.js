/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
function calcNumbersTotalAndAverage(...numbers){
    var total = 0;
    for(var n of numbers) {
        total += n;
    }
    return {
        total, //프로퍼티 키와 값을 담은 변수가 동일할 때 한번만 쓰면 됨
        avg: total / numbers.length,
    };

}
var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);