//OR연산 : 첫번째 truthy를 반환
console.log('hello' || 'world');
console.log(0 || '안녕');

//AND연산 : 첫번쨰 falsy를 반환
console.log('------------------------');
console.log('HELLO' && 'WORLD');
console.log(null && '메롱');


/*
    <사용예>

    <h1>안녕하세요 우리 홈페이지에 오신걸 환영합니다. </h1>
    isLogin() && <h2>xxx님 안녕하세요!</h2>

    쿠폰당첨플래스 && sendCoupon()

    isMine() && <button>수정</button>   
*/