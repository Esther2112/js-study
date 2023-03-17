/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

var answer = '';
var array = [];
var sum = 0;
while(true) {
    answer = prompt(`배열에 저장할 숫자를 입력하세요.\n'그만' 이라고 입력하면 종료됩니다.`);
    if(answer === '그만') {
        alert(`입력한 숫자 목록: [${array}] \n입력한 숫자 총합: ${sum}`);
        break;
    }
    array.push(answer);
    sum += +answer;
}