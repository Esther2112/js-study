//난이도를 선택하는 기능
function selectGameLevel() {
  var HIGH = 1,
    MIDDLE = 2,
    LOW = 3;
  var cnt = 0;
  while (true) {
    var level = +prompt(`난이도를 설정하세요~~\n[1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번) ]`);
    if (level === HIGH) {
      cnt = 3;
    } else if (level === MIDDLE) {
      cnt = 6;
    } else if (level === LOW) {
      cnt = 10;
    } else {
      alert(`난이도를 다시 입력하세요`);
      continue;
    }
    return cnt;
  }
}
//게임데이터를 생성하는 함수
function makeGameData() {
  return {
    num: Math.floor(Math.random() * 50) + 1,
    min: 1,
    max: 50,
    cnt: selectGameLevel(),
  };
}
//한 게임이 진행되는 함수
function runUpdownGame(gameData) {
  const num = gameData.num;
  let min = gameData.min;
  let max = gameData.max;
  let cnt = gameData.cnt;
  var ans = +prompt(`[1 ~ 50 사이의 무작위 숫자를 ${cnt}번 안에 맞혀보세요!!!]`);
  while (true) {
    cnt--;
    if (num === ans) {
      alert('정답!');
      break;
    } else if (num > ans) {
      if (min < ans) {
        min = ans;
      }
      ans = +prompt(`UP!!! [${min} ~ ${max}]\n기회가 ${cnt}번 남았습니다`);
    } else {
      if (max > ans) {
        max = ans;
      }
      ans = +prompt(`DOWN!!! [${min} ~ ${max}]\n기회가 ${cnt}번 남았습니다`);
    }

    if (cnt === 1) {
      alert('기회를 다 썼습니다. 틀렸엉');
      break;
    }
  }
}

//게임시작 함수
function startGame() {
  var flag = true;
  // 게임시작
  while (flag) {
    // 게임데이터 생성
    const gameData = makeGameData();
    // 루프 시작
    runUpdownGame(gameData);   
    // 루프 끝
    flag = confirm('게임을 다시 하실래요?');
  }
  // 게임끝
}

//=================================================
//게임 실행
startGame();


//구조분해할당 써서 더 개선해보기 **