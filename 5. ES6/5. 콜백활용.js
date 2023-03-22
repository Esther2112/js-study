const userList = [{
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobby: ['수영', '축구', '테니스']
    },
    {
        account: 'borabora',
        userName: '보라돌이',
        job: '백수',
        address: '서울',
        hobby: ['복싱', '마라톤']
    },
    {
        account: 'sajangnim',
        userName: '김사장',
        job: '사장',
        address: '경기',
        hobby: ['수영', '테니스', '축구', '복싱']
    },
    {
        account: 'nurung',
        userName: '누룽지',
        job: '백수',
        address: '서울',
        hobby: ['배드민턴', '조깅']
    },
];

//회원목록에서 회원정보를 출력하는 함수
// function alertUserInfo(wannaSay){
//     for(const user of userList){
//         wannaSay(user);
//     }
// }

// alertUserInfo(u => {console.log(`나는 ${u.userName}님이시다아아아하하핳핳ㅎ하하하하하핳핳하`);});

//배열 고차 함수
//forEach(): 배열의 요소를 반복하면서 하나씩 꺼내줌
// userList.forEach((user) => {console.log(`나는 ${user.address}에 산다ㅏ아아아하하핳핳ㅎ하`)});

// const numbers = [10, 20, 30, 40];
// let total = 0;
// numbers.forEach((n) => {total += n});
// console.log(`총합: ${total}`);

//취미가 딱 2개인 회원들만 필터링해서 새로운 배열에 담아줘
// function HobbyFilter(){
//     //새로운 배열 생성
//     const filteredArray = [];
//     for(const user of userList) {
//         if(user.hobby.length ===2) {
//             filteredArray.push(user);
//         }
//     }
//     return filteredArray;
// }

// const newArray = HobbyFilter();
// console.log(newArray);

// function addressFilter(){
//     //새로운 배열 생성
//     const filteredArray = [];
//     for(const user of userList) {
//         if(user.address === '서울') {
//             filteredArray.push(user);
//         }
//     }
//     return filteredArray;
// }

// const newArray = addressFilter();
// console.log(newArray);

//특정 필터 조건에 의해 필터링 하는 함수

// function filtered(condition){
//     //새로운 배열 생성
//     const filteredArray = [];
//     for(const user of userList) {
//         if(condition(user)) {
//             filteredArray.push(user);
//         }
//     }
//     return filteredArray;
// }

// const newArray = filtered(u => u.address === '서울');
// console.log(newArray);


//js 배열 고차함수 filter()
//특정 조건에 의해 필터링된 배열을 반환
// console.log('=================================================');

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr = numberArray.filter(n => n % 2 === 0);
// console.log(newArr);

// const user1 = userList.filter(user => user.account === 'abc1234');
// console.log(user1);


// console.log('=================================================');

//배열 고차함수 map()
//특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 매핑한 배열을 반환

// const userNames = userList.map(user => user.address);
// console.log(userNames);
//userList에서 원하는 프로퍼티값을 매핑하는 함수
// function myMap(m){
//     const mappedArray = [];
//     for(const user of userList) {
//         mappedArray.push(m(user));
//     }
//     return mappedArray;
// }
// const userNames2 = myMap(user => user.address);
// console.log(userNames2);

// console.log('==================================================');

// const appleBasket = [
//     {
//         color: 'green',
//         sweet: 13,
//     },
//     {
//         color: 'red',
//         sweet: 12,
//     },
//     {
//         color: 'green',
//         sweet: 5,
//     },
//     {
//         color: 'red',
//         sweet: 8,
//     },
//     {
//         color: 'green',
//         sweet: 9,
//     },
// ];

// 사과 중 녹색이면서 당도가 9 이상인 사과만 선별하여 이 사과는 xxx색이며 당도가 xx입니다.
//라는 문자열이 모여있는 배열을 리턴하세요.

// const mappedApple = 
//         appleBasket
//             .filter(apple => apple.color === 'green' && apple.sweet >= 9)
//             .map(apple => `이 사과는 ${apple.color}색이면서 당도는 ${apple.sweet}입니당`);
// console.log(mappedApple);


//userList에서 서울에 사는 애들만 모아서 걔네들의 첫번째 취미만 모아서 배열로 리턴
const mappedUserHobby =
    userList
    .filter(user => user.address === '서울')
    .map(user => user.hobby[0]);
console.log(mappedUserHobby);

function filteringUserInfo(list, filtercallback) {
    const filteredUserArray = [];
    for (const user of list) {
        if (filtercallback(user)) {
            filteredUserArray.push(user);
        }
    }
    return filteredUserArray;
}
function mappedUserInfo(list, mapcallback){
    const mappedUserArray = [];
    for(const user of list){
        mappedUserArray.push(mapcallback(user));
    }
    return mappedUserArray;
}
// const filteredUserArray = filteringUserInfo(userList, user => user.address === '서울');
// const mappedUserArray = mappedUserInfo(filteredUserArray, user => user.hobby[0]);
// console.log(mappedUserArray);

const mappedUserArray = 
        mappedUserInfo(
            filteringUserInfo(userList, user => user.address === '서울'), 
            user => `${user.userName}회원의 첫번째 취미는 ${user.hobby[0]}입니다`);
console.log(mappedUserArray);