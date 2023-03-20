/*
- 요구사항
1. 사용자에게 계정을 입력받으세요.
2. 입력된 계정이 존재하는 계정이 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 계정이 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "xxx님 환영합니다!"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/
var userInfo = {
    userList: [{
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한'
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호'
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동'
        },
    ]
};

var userList = userInfo.userList;

//내답안============================================================
// var isLogin = false;
// while (!isLogin) {
//     var insertedID = prompt('아이디를 입력하세요');
//     for (var i = 0; i < userList.length; i++) {
//         if (insertedID === userList[i].account) {
//             var insertedPW = prompt('비밀번호를 입력하세요');
//             if (insertedPW === userList[i].password) {
//                 isLogin = true;
//                 alert(`${userList[i].username}님 환영합니다`);
//                 break;
//             } else {
//                 alert(`비밀번호가 틀렸습니다`);
//                 break;
//             }
//         }
//         if (i === (userList.length - 1)) {
//             alert(`존재하지 않는 회원입니다`);          
//         }
//     }
// }


//선생님 답안============================================================
while (true) {
    //아이디 검증
    var insertedID = prompt('아이디를 입력하세요');
    var foundUser = null; //로그인 시도하는 회원의 정보객체
    for (var user of userList) {
        if (insertedID === user.account) {
            foundUser = user;
            break;
        }
    }


    if (foundUser !== null) {
        //비밀번호 검증
        var insertedPW = prompt(`비밀번호를 입력하세요`);
        if (insertedPW === foundUser.password) {
            alert(`${foundUser.username}님 환영합니다`);
            break;
        } else {
            alert(`비밀번호가 틀렸습니다.`);
        }
    } else {
        alert(`존재하지 않는 회원입니다`);
    }
}