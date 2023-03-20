// 함수 정의
function greeting(yourName){
    console.log(`${yourName}님 안녕하세요! 어쩔티비!`);
    console.log(`오늘도 즐거운 하루 되세요 ~~~ㅋㅋ루삥뽕`);
}

//함수호출
var myName = '공실이';
greeting(myName);

function midLine(){
    console.log('=========================================');
}

midLine();


//원의 넓이를 자주 구한다.
function calcAreaCircle(r){
    var PI = 3.14159265;
    var area = PI * r ** 2;
    return area;
}
