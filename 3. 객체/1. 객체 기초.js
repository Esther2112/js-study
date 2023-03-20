//객체 리터럴(값)
var dog = {
    //프로퍼티 작성
    'name': '뽀삐',
    kind: '진돗개',
    age: 3,
    injection: true,
    favorite: ['낮잠자기', '방 어지르기'],
    kind: '블랙러시안',
};

var cat = {
    'name': '콩순이',
    age: 2,
    injection: true,
    favorite: ['낮잠자기', '방 어지르기'],
    kind: '블랙러시안',
};

console.log(typeof cat);


//객체에 저장된 데이터 참조
console.log(dog.name);
console.log(cat.age);
console.log(cat.age);
console.log(cat.favorite);
console.log(dog.favorite[0]);
dog.favorite.push('꼬리 흔들기');
console.log(dog);

///프로퍼티 참조2
console.log(dog['injection']);
//대괄호 안에 프로퍼티의 키를 넣을때는 꼭 ''안에 넣는다.
//키를 변수에 저장한 경우
var fv = 'favorite';
console.log(cat.fv); //undefined
console.log(cat[fv]); //['낮잠자기', '방어지르기']

//프로퍼티 값 수정
dog.age = 4;
cat.favorite[1] = '실뭉치';
dog['injection'] = false;
console.log(dog);

//프로퍼티 동적 추가
cat.owner = '김철수'; //owner키 추가
cat.owner = '박영희'; //수정
console.log(cat);

//프로퍼티 삭제
delete cat.owner;
console.log(cat);


console.log('===========================================');

//프로퍼티 존재 유무 확인
// key를 반드시 문자열로 표기해야 함
var ageFlag= 'age' in cat; //boolean return
console.log(ageFlag);

// master라는 프로퍼티가 없으면 추가해라
var m = 'master';
if(!(m in cat)) {
    cat[m] = '김또또';
}

console.log('===========================================');

//객체를 순회하는 반복문
//for of 배열 , for in 객체
//객체 순회시 key를 추출해줌
for(var k in dog) {
    // console.log(k);
    console.log(dog[k]);
}


//객체의 중첩구조
//예시 : 게시판
var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, 
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, 
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};