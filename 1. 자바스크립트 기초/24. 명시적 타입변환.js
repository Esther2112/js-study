var x = 30, y = 40;
var z = '' + x + y;
console.log(z);

// 키, 몸무게
// var cm = prompt('키를 입력!(cm)');
// var kg = prompt('몸무게를 입력!(kg)');

// var m = cm / 100;

// var bmi = kg / (m * m);
// alert(`당신은 bmi가 ${bmi}입니다.`);


//논리연산자로 형변환 !!

//회원 로그인여부 확인
//브라우저 로컬 스토리지에 토큰이 존재하면 로그인한 것임
function isLogin() {
    //getItem은 해당 값이 있으면 값을 가져오고 없으면 null을 반환
    return !!localStorage.getItem('ACCESS_TOKEN');
}


