# Problem Solving 저장소

하루 한개 이상을 목표로 합니다.

<br>

## programmers

- [level1](#level1)
- [level2](#level2)
- [level3](#level3)

<br>

# level1

## 목차

- [크레인 인형뽑기 게임](#크레인-인형뽑기-게임) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/64061)
- [완주하지 못한 선수](#완주하지-못한-선수) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/64061)
- [모의고사](#모의고사) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42840)
- [체육복](#체육복) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42862)
- [2016년](#2016년) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/12901)
- [K번째수](#K번째수) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42748)
- [실패율](#실패율) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42889)
- [자연수 뒤집어 배열로 만들기](#자연수-뒤집어-배열로-만들기) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/12932)
- [가운데 글자 가져오기](#가운데-글자-가져오기) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/12903)
- [같은 숫자는 싫어](#같은-숫자는-싫어) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/12906)
- [키패드 누르기](#키패드-누르기) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/67256)

<br>

## 크레인 인형뽑기 게임

**접근법**  
우리가 알아야하는 정보는 배열 **각 행에서의 가장 끝 인형**과 **바구니 맨 위에 있는 인형의 종류**이다.  
따라서 나는 처음 moves의 배열을 돌며 어느 행을 탐색해야 하는지, 또 각 행에서 뽑아야하는 인형을 찾았다.
만약 인형이 존재하지 않는다면 뽑지말고 지나가야하므로 if조건을 주었고
인형이 존재한다면 box안의 인형의 종류와 뽑은 인형을 비교, 만약 같다면 박스의 맨 위 인형을 꺼낸다음 ans+=2 아니라면 박스에다가 인형을 집어넣는다. 그리고 크레인 안의 뽑은 인형을 없애준다.

<br>

> **나의 풀이**

```javascript
function solution(board, moves) {
  const len = board.length;
  let ans = 0;
  const box = [];
  moves.map((col) => {
    for (let i = 0; i < len; i++) {
      if (!board[i][col - 1]) {
        continue;
      } else {
        if (box[box.length - 1] === board[i][col - 1]) {
          box.pop();
          ans += 2;
        } else {
          box.push(board[i][col - 1]);
        }
        board[i][col - 1] = 0;
        break;
      }
    }
  });
  return ans;
}
```

<br><br>

## 완주하지 못한 선수

**접근법**  
단순히 2중 FOR문을 통한 차집합 또는 완주자는 참가자의 부분집합임을 이용하여 sort후에 FOR를 한번 돌려 찾는 방법이 있지만 쉬운 문제인 만큼 배열 메소드를 이용하여 풀어보았다.  
participant중에 한명을 찾는것이므로 participant.find()  
누구를?? completion배열 안에 없는 사람을!  
따라서 completion배열을 돌면서 이름 인덱스에 완주자 수를 차곡차곡 쌓는다.  
그리고나서 paricipant 배열을 돌며 이름을 completion배열에 비교해준다.그리고 그에 해당하는 완주자 수를 빼준다! 만약 존재하지 않는다면 undefinded, 즉 false값이 나올것이고 그를 뒤집어 true로 만들어서 return 해주면 완주하지 못한 선수가 나오게 된다.

<br>

> **나의 풀이**

```javascript
function solution(participant, completion) {
  return participant.find(
    (e) => {
      return !completion[e]--;
    },
    completion.map((e) => {
      return (completion[e] = (completion[e] | 0) + 1);
    })
  );
}
```

<br><br>

## 모의고사

**접근법**  
딱히 설명이 필요해보이진 않는다.

<br>

> **나의 풀이**

```javascript
function solution(answers) {
  const answerSheet1 = [1, 2, 3, 4, 5];
  const answerSheet2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const answerSheet3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];

  const ans = [];

  answers.map((e, i) => {
    if (e === answerSheet1[i % 5]) count[0]++;
    if (e === answerSheet2[i % 8]) count[1]++;
    if (e === answerSheet3[i % 10]) count[2]++;
  });
  const value = Math.max(...count);

  count.forEach((e, i) => {
    if (e === value) ans.push(i + 1);
  });

  return ans;
}
```

<br><br>

## 체육복

**접근법**  
엄청 쉽게 생각했었는데 테스트케이스 12번에서 계속 막혀 뭐가 틀렸지 계속 머리를 싸매다가
질문글을 봤더니 이런 글이 있더라!  
**여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다**  
만약 10명의 학생이 있는데 (1,4,5) 학생이 옷을 잃어버리고 (1,3,4) 학생이 여벌의 옷이 있다면 1번->1번 3번->4번 4번->5번 이렇게 빌려 주는 것이 아닌 1번->1번 4번->4번 이런식으로 빌려줘야 하는것이었다. 3번은 5번과 2이상이 차이나므로 체육복을 입을 수 있는 학생의 수는 10이 아닌 9이었던 것이다!  
화가 난 나는 그냥 아래 코드를 복사붙여넣기해서 lost와 reserve와의 똑같은 값은 필터링해버린 후 원래 코드를 넣었다.  
아주 잘 돌아간다. 효율성 체크가 없는게 다행인 것 같다. 나중에 다시 더 깔끔한 코드로 수정이 필요하다.

<br>

> **나의 풀이**

```javascript
function solution(n, lost, reserve) {
  const lostt = lost.filter((lo) => {
    const a = reserve.find((re) => lo - re === 0);

    reserve = reserve.filter((e) => a !== e);
    if (!a) {
      return true;
    }
  });
  return (
    n -
    lostt.filter((lo) => {
      const a = reserve.find((re) => Math.abs(lo - re) <= 1);

      reserve = reserve.filter((e) => a !== e);
      if (!a) {
        return true;
      }
    }).length
  );
}
```

<br><br>

## 2016년

**접근법**

<br>

> **나의 풀이**

> **new Date(year, monthIndex[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);**

**monthIndex**  
월을 나타내는 정숫값. 0은 1월을 나타내고 11은 12월을 나타냅니다.

```javascript
function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return day[new Date(2016, a - 1, b).getDay()];
}
```

<br><br>

## K번째수

**접근법**  
배열을 slice한다음 오름차순 sort 후 k번째 수 ans배열에 저장!

<br>

> **나의 풀이**

```javascript
function solution(array, commands) {
  let ans = [];
  commands.forEach((e) => {
    ans.push(array.slice(e[0] - 1, e[1]).sort((a, b) => a - b)[e[2] - 1]);
  });
  return ans;
}
```

<br><br>

## 실패율

**접근법**  
보통 나와있는 테스트만 통과하면 만약 틀린다해도 1~2개가 틀렸었는데 반절이 넘게 우수수 테스트가 실패해서 살짝 당황했던 문제였다.  
내가 간과한 부분은 5, [1]과 같은 스테이지내 클리어수가 0명일 경우의 실패율 처리 실패율이 같을 경우 오름차순 sort를 하지 않은 부분이었다.  
문제에 다 나와있는 경우였지만 뭐가 틀린거지 한참을 들여다 봤던 문제. 조금 더 문제를 꼼꼼히 읽고 요구사항에 맞는 로직을 구현해야겠다.  
기본적인 접근 방법은 stage 값를 따로 주기 귀찮아 FOR문을 돌며 stage값을 주고 또 그 안에서 stages배열을 돈다.  
배열을 돌며 현재 해당 스테이지를 클리어하지 못한사람, 이 스테이지에 도전했던 사람들을 모두 카운트하여 실패율을 구하고 failure 배열에 객체를 저장해여 실패율과 스테이지별로 정렬을 하여 리턴한다!

<br>

> **나의 풀이**

```javascript
function solution(N, stages) {
  let failures = [];
  let notClear = 0;
  let challenger = 0;
  for (let stage = 1; stage <= N; stage++) {
    notClear = 0;
    challenger = 0;
    stages.forEach((e) => {
      e === stage ? notClear++ : e >= stage ? challenger++ : 0;
    });

    failures.push({
      stage,
      failure: notClear === 0 ? 0 : notClear / (challenger + notClear),
    });
  }

  return failures
    .sort((a, b) => {
      return b["failure"] === a["failure"]
        ? a["stage"] - b["stage"]
        : b["failure"] - a["failure"];
    })
    .map((e) => e.stage);
}
```

<br><br>

## 자연수 뒤집어 배열로 만들기

**접근법**  
자르고 변환하고 합치고!

<br>

> **나의 풀이**

```javascript
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((e) => Number(e));
}
```

<br><br>

## 가운데 글자 가져오기

**접근법**  
Math.ceil -> 올림  
Math.floor -> 내림  
Math.round -> 반올림

<br>

> **나의 풀이**

```javascript
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, !(s.length % 2) ? 2 : 1);
}
```

<br><br>

## 같은 숫자는 싫어

**접근법**  
같은 숫자는 싫다구!

<br>

> **나의 풀이**

```javascript
function solution(arr) {
  return arr.filter((e, i) => e !== arr[i + 1]);
}
```

<br><br>

## 키패드 누르기

**접근법**  
요즘 책을 안읽어서 그런지 문제가 무슨 소리인지를 몰라서 약간 헤맨 문제. 카카오는 문제가 너무 길고 어렵다 ㅠㅠㅠ 더 연습해야해..!!
일단 키보드를 사전처럼 하드코딩하여 포지션을 매칭시켜놨다. 그 다음 number마다 왼손 오른쪽의 위치를 파악하고 거리를 계산하여 answer에다가 넣기!!!

<br>

> **나의 풀이**

```javascript
function solution(numbers, hand) {
  let currentLeftHand = "*";
  let currentRightHand = "#";
  let answer = "";

  const keyboard = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  const calDistance = (hand, rightPos, leftPos, target) => {
    const distFromRight =
      Math.abs(rightPos[0] - target[0]) + Math.abs(rightPos[1] - target[1]);
    const distFromLeft =
      Math.abs(leftPos[0] - target[0]) + Math.abs(leftPos[1] - target[1]);
    if (distFromLeft === distFromRight) {
      return hand === "right" ? "R" : "L";
    } else {
      return distFromRight > distFromLeft ? "L" : "R";
    }
  };

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      answer += "L";
      currentLeftHand = number;
    } else if (number === 3 || number === 6 || number === 9) {
      answer += "R";
      currentRightHand = number;
    } else {
      const RorL = calDistance(
        hand,
        keyboard[currentRightHand],
        keyboard[currentLeftHand],
        keyboard[number]
      );
      if (RorL === "R") {
        currentRightHand = number;
      } else {
        currentLeftHand = number;
      }
      answer += RorL;
    }
  });
  return answer;
}
```

<br>

<br><br>

## 비밀지도

**접근법**
지문에 맞게 위에서부터 아래로 만들었고 잘 작동했다 근데 다른사람이 단 한줄에 짠 풀이를 보고 진이 빠졌다... 시간도 약 20배 이상 차이나구,... 대단한사람들..! 일단 주어진 10진수 배열 2개를 2진수로 변환하는 작업을 필요로했다. Array.from과 toString을 통해 2진수로 변환하고 자리수도 맞춰서 2진수 배열 2개를 만들어주고 for문을 돌며 각각의 요소를 비교하며 #인지 공백인지 검사했다!

<br>

> **나의 풀이**

```javascript
function solution(n, arr1, arr2) {
  const secretMap1 = Array.from(arr1, (x) => {
    if (x.toString(2).length === n) {
      return x.toString(2);
    } else {
      let newString = "";
      for (let i = 0; i < n - x.toString(2).length; i++) {
        newString += "0";
      }
      return newString + x.toString(2);
    }
  });
  const secretMap2 = Array.from(arr2, (x) => {
    if (x.toString(2).length === n) {
      return x.toString(2);
    } else {
      let newString = "";
      for (let i = 0; i < n - x.toString(2).length; i++) {
        newString += "0";
      }
      return newString + x.toString(2);
    }
  });

  const makeSecretMap = (secretMap1, secretMap2) => {
    let answer = [];
    for (let i = 0; i < n; i++) {
      let line = "";
      for (let j = 0; j < n; j++) {
        if (secretMap1[i][j] === "1" || secretMap2[i][j] === "1") {
          line += "#";
        } else {
          line += " ";
        }
      }
      answer.push(line);
    }
    return answer;
  };

  const answer = makeSecretMap(secretMap1, secretMap2);

  return answer;
}
```

<br>

# level2

## 목차

- [H-Index](#H-Index)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42747)
- [숫자 야구](#숫자-야구)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42841)
- [쇠막대기](#쇠막대기)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42585)
- [기능개발](#기능개발)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42586)
- [프린터](#프린터)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42587)
- [다리를 지나는 트럭](#다리를-지나는-트럭)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42587)
- [스킬트리](#스킬트리)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/49993)
- [폰켓몬](#폰켓몬)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/1845)
- [탑](#탑)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42588)
- [가장 큰 수](#가장-큰-수)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42746)
- [큰 수 만들기](#큰-수-만들기)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42883)
- [멀쩡한 사각형](#멀쩡한-사각형)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/62048)
- [124 나라의 숫자](#124-나라의-숫자)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/12899)
- [문자열 압축](#문자열-압축)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/60057)
- [위장](#위장)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42578)
- [튜플](#튜플)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/64065)
- [영어 끝말잇기](#영어-끝말잇기)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42578)
- [다음 큰 숫자](#다음-큰-숫자)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/12911)
- [괄호 변환](#괄호-변환)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/60058)
- [소수 찾기](#소수-찾기)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42839)
- [올바른 괄호](#올바른-괄호)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/12909)
- [구명보트](#구명보트)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42885)
- [수식 최대화](#수식-최대화) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/67257)
- [캐시](#캐시) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/17680)
- [카펫](#카펫) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42842)
- [방금그곡](#방금그곡) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/17683)
- [땅따먹기](#땅따먹기) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/12913)

<br>

## H-Index

**접근법**  
논문배열을 돌며 인용횟수의 값을 저장한다.  
저장한 뒤 qutation의 값이 변경되었다면 기존 인용의 수보다 많다는 뜻이므로 비교를 해주어야한다.  
만약 현재 검사중인 논문의 인용횟수보다 더 큰지 비교한다. 만약 크다면 인용횟수가 즉 hIndex값이 되므로 대입을 시켜주고,  
만약 작다면 hIndex보다 현재 검사중인 논문의 인용횟수가 더 큰지 비교한다. 만약 더 크다면 현재 검사하고있는 논문의 인용수가 최댓값일것이므로 e를 hIndex에 대입해준다.  
let quotation 밑에 아래 로그를 출력하며 따라가면 이해가 더 쉬울 것이다.

```javascript
console.log(quotation, hIndex, e);
```

<br>

> **나의 풀이**

```javascript
function solution(citations) {
  let hIndex = 0;
  citations.forEach((e) => {
    let quotation = Math.max(citations.filter((h) => h >= e).length, hIndex);

    if (quotation !== hIndex) {
      if (e >= quotation) {
        hIndex = quotation;
      } else if (hIndex < e) {
        hIndex = e;
      }
    }
  });
  return hIndex;
}
```

<br><br>

## 숫자 야구

**접근법**  
1\~1000까지의 배열을 만든다음 문제 조건에 맞게 **각기 서로 다른 1\~9까지 3자리 임의의 숫자**를 필터링한다.  
이제 문제에서 주어지는 값과 ans배열을 돌면서 주어진 값에대한 스트라이크, 볼이 ans에서의 값과 동일한지를 체크한다. 예컨데 주어진 값 123이 1S 1B이라고 했을시 ans배열 안에서 123이 1S 1B이 나오는 값을 찾아 필터링 해주며 답을 찾아간다.

<br>

> **나의 풀이**

```javascript
function solution(baseball) {
  let ans = [...Array(1000).keys()].filter((e) => {
    if (
      e >= 123 &&
      e <= 987 &&
      String(e).charAt(0) !== "0" &&
      String(e).charAt(1) !== "0" &&
      String(e).charAt(2) !== "0" &&
      String(e).charAt(0) !== String(e).charAt(1) &&
      String(e).charAt(1) !== String(e).charAt(2) &&
      String(e).charAt(2) !== String(e).charAt(0)
    ) {
      return true;
    }
  });

  baseball.forEach(([value, strike, ball]) => {
    ans = ans.filter((e) => {
      let strikeCount = 0;
      let ballCount = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (String(e).charAt(i) === String(value).charAt(j) && i === j) {
            strikeCount++;
          } else if (
            String(e).charAt(i) === String(value).charAt(j) &&
            i !== j
          ) {
            ballCount++;
          }
        }
      }
      if (strikeCount === strike && ballCount == ball) {
        return true;
      }
    });
  });
  return ans.length;
}
```

<br><br>

## 쇠막대기

**접근법**  
스택/큐를 사용하기보단 풀다보니 그냥 정수로 "("의 갯수를 세는편이 더 빠르고 편한것 같아 사용했다.  
일단 String문자 하나하나를 돌며 arrangement가 "("인지 확인한다. "("표시는 레이저의 시작점, 또는 막대기의 시작점이므로 그냥 openBraket만 증가시킨다 검사할 대상은 바로 ")"이다. ")"표시는 막대기의 끝과 레이저 배치에 따른 잘리는 양을 담당하므로 조금 자세하게 들어갈 필요성이 있다.  
**만약 ")"이전의 괄호가 "("일 경우**  
레이저를 의미한다. 그럼 막대기가 잘려야하므로 openBraket의 숫자만큼 증가를 시켜준다. 따라서 레이저 괄호 1개를 제외한 openBraket갯수를 ans에 더해준다.  
**만약 다른 경우 즉 ")"이전의 괄호가 ")"인 경우**  
막대기의 끝을 의미한다. 주어진 조건에서 안잘리는 막대기는 존재하지 않으므로 openBraket갯수를 하나 줄이며 ans에 +1을 해주고 반복한다.

<br>

> **나의 풀이**

```javascript
function solution(arrangement) {
  let openBraket = 0; //"("
  let ans = 0;
  for (let i = 0; i < arrangement.length; i++) {
    if (arrangement[i] === "(") {
      openBraket++;
    } else {
      if (arrangement[i - 1] === "(") {
        openBraket--;
        ans += openBraket;
      } else {
        openBraket--;
        ans += 1;
      }
    }
  }
  return ans;
}
```

<br><br>

## 기능개발

**접근법**  
각 기능별로 얼마만큼의 일수가 지나야 작업이 완료되는지 remain함수에 전부 넣은 뒤,  
remain 배열을 검사하면서 하루에 몇 번 배포가 가능한지 계산하고 ans배열에 넣는다.  
remain배열을 검사하는 부분이 너무 복잡하다 단순화 할수 있을 것 같은데 머리가 돌아기질 않는다.

<br>

> **나의 풀이**

```javascript
function solution(progresses, speeds) {
  const ans = [];
  let count = 0;
  let index = 0;
  let remain = progresses.map((e, i) => Math.ceil((100 - e) / speeds[i]));

  for (let i = 0; i < remain.length; i++) {
    for (let j = index; j < remain.length; j++) {
      if (remain[i] >= remain[j]) {
        if (j === remain.length - 1) {
          count++;
          ans.push(count);
        }
        count++;
        index++;
      } else if (count !== 0) {
        ans.push(count);
        count = 0;
        break;
      } else {
        break;
      }
    }
  }

  return ans;
}
```

<br><br>

## 프린터

**접근법**  
코드가 너무 비효율적이다 다시 생각해보자

<br>

> **나의 풀이**

```javascript
function solution(priorities, location) {
  let ans = 1;
  while (true) {
    if (priorities[0] < Math.max.apply(null, priorities)) {
      priorities.push(priorities[0]);
      priorities.shift();
      if (location === 0) {
        location += priorities.length - 1;
      } else {
        location--;
      }
    } else if (location === 0) {
      return ans;
    } else {
      priorities.shift();
      ans++;
      location--;
    }
  }
}
```

<br><br>

## 다리를 지나는 트럭

**접근법**  
while 루프를 돌면서 time을 증가시키고 차량이 다리에 내려감과 올라감이 동시에 진행되야 하므로 처음 다리 위에 차량이 있는지 검사한다.  
존재한다면 올라가있는 차량의 시간이 다리를 다 건널 수 있을만큼의 시간인가 체크후 아니면 넘어가고 맞다면 다리 위의 중량을 빼주고 다리 위에 차량을 제거한다.
그리고 다리 위에 차량이 올라갈 수 있다면 다리 위의 무게를 증가시켜주고 onBridge 배열에 시간체크를 위한 time과 weight를 객체로 넣어준 뒤 대기 트럭을 제거한다. 그리고 이 과정을 반복한다.

<br>

> **나의 풀이**

```javascript
function solution(bridge_length, weight, truck_weights) {
  let onBridge = [];
  let onBridgeWeight = 0;
  let time = 0;
  while (true) {
    if (truck_weights.length === 0 && onBridge.length === 0) {
      break;
    }

    time++;
    if (onBridge[0] && onBridge[0].time + bridge_length === time) {
      onBridgeWeight -= onBridge[0].weight;
      onBridge.shift();
    }
    if (weight - onBridgeWeight >= truck_weights[0]) {
      onBridgeWeight += truck_weights[0];
      onBridge.push({ time, weight: truck_weights[0] });
      truck_weights.shift();
    }
  }
  return time;
}
```

<br><br>

## 스킬트리

**접근법**  
뭔가 생각하다 잘 안돼면 if문만 쓰는거 같은데 다른 사람들의 코드를 보면 참 간결하고 보기 쉽다. 따라해야할텐데...  
쨋든 skill을 배열으로 쪼개어 편하게 쓰기 위해 뒤집는다. skill_trees를 돌며 선행되어야할 스킬트리가 뒤에 있는지, 앞에있는지 존재한다.  
뒤부터 돌고 있으므로 현재 스킬의 인덱스가 뒤이은 스킬보다 크면 된다!! 만약 해당 skill_tree에 skill이 존재하지 않을 시 뒤에서 검사를 해봐야 하므로 filter에서 거르지 않는다. 하지만 skill이 존재하지만 뒤의 스킬이 존재하지 않는다? 선행스킬 위반이므로 즉시 false를 리턴한다.

<br>

> **나의 풀이**

```javascript
function solution(skill, skill_trees) {
  const arr = skill
    .split("")
    .reverse()
    .map((e) => e);
  for (let i = 0; i < arr.length - 1; i++) {
    skill_trees = skill_trees.filter((el) => {
      if (el.indexOf(arr[i]) === -1) {
        return true;
      }
      if (el.indexOf(arr[i]) > -1 && el.indexOf(arr[i + 1]) === -1) {
        return false;
      }
      return el.indexOf(arr[i]) > el.indexOf(arr[i + 1]) ? true : false;
    });
  }
  return skill_trees.length;
}
```

<br><br>

## 폰켓몬

**접근법**  
일단 내가 최대한으로 가져갈 수 있는 폰켓몬의 갯수를 max로 잡고 배열 nums의 중복값을 모두 제거해준다.  
그 뒤 nums 배열의 길이와 max값을 비교해 배열의 길이가 더 짧으면 배열의 길이를 아니면 max값을 리턴한다.

<br>

> **나의 풀이**

```javascript
function solution(nums) {
  const max = nums.length / 2;
  nums = nums.filter((e, i) => nums.indexOf(e) === i);
  return nums.length >= max ? max : nums.length;
}
```

<br><br>

## 탑

**접근법**  
height배열 원소를 하나 꺼내 height 배열을 원소 기준 왼쪽만 검사하며 큰 값이 있나 검사하고 발견된다면 index, 못하면 0을 집어넣는다!

<br>

> **나의 풀이**

```javascript
function solution(heights) {
  let ans = [];
  heights.forEach((e, index) => {
    for (let i = index; i >= 0; i--) {
      if (e < heights[i]) {
        ans.push(i + 1);
        break;
      }
      if (i == 0) {
        ans.push(0);
      }
    }
  });
  return ans;
}
```

<br><br>

## 가장 큰 수

**접근법**  
**문자열로 바꾸어 return**해야합니다.

<br>

> **나의 풀이**

```javascript
function solution(numbers) {
  const ans = numbers
    .map((e) => String(e))
    .sort((a, b) => b + a - (a + b))
    .join("");
  return ans[0] === "0" ? "0" : ans;
}
```

<br><br>

## 큰 수 만들기

**접근법**  


<br>

> **다른 사람의 풀이**

```javascript
function solution(number, k) {
  let ans = [];
  for (let i = 0; i < number.length; i++) {
    let currentValue = number[i];
    while (k > 0 && ans[ans.length - 1] < currentValue) {
      ans.pop();
      k--;
    }
    ans.push(currentValue);
  }
  ans.splice(ans.length - k, k);
  return ans.join("");
}
```

<br><br>

## 멀쩡한 사각형

**접근법**  
찾아보니 w\*h - (w+h-두 수의 최대공약수)라는 공식이 있다고 하더라!!  
자세한 정보는 [해당블로그](https://hyem-study.tistory.com/45)를 참고하자 그리고 외우자 그냥!

<br>

> **나의 풀이**

```javascript
function solution(w, h) {
  let gcd;
  if (w === h) {
    return w * h - w;
  }
  for (let i = Math.min(w, h); i >= 1; i--) {
    if (w % i === 0 && h % i === 0) {
      gcd = i;
      break;
    }
  }
  return w * h - (w + h - gcd);
}
```

<br><br>

## 124 나라의 숫자

**접근법**  
규칙을 찾는 것이 중요한 문제이다.  
124나라 : 1, 2, 4, 11, 12, 14, 21, 22, 24, 41, 42, 44, 111, 112, 114  
숫자 : 1, 2, 3, 4 , 5 , 6 , 7 , 8 , 9 , 10, 11, 12, 13, 14 , 15  
이런 식으로 진행이 되고 숫자를 3으로 나눈 나머지가 1, 2, 0 이면 1, 2, 4로 치환이 된다는 것을 이용한다.

<br>

> **나의 풀이**

```javascript
function solution(n) {
  let ans = "";
  while (n > 0) {
    if (n % 3 === 0) {
      ans = "4" + ans;
      n -= 1;
    } else if (n % 3 === 1) {
      ans = "1" + ans;
    } else {
      ans = "2" + ans;
    }
    n = Math.floor(n / 3);
  }
  return ans;
}
```

<br><br>

## 문자열 압축

**접근법**  
s의 slice범위를 지정하는데 조금 시간이 소요된 것 말고는 많이 어렵지 않은 문제였다.  
s의 절반 만큼 첫번째 FOR문을 돌며 기준이 되는 문자열을 slice해준다. 두번째 FOR문에서는 slice한 문자 끝 인덱스 부터 비교를 할 문자 slice2를 잘라준다.  
문자를 자르고 기준이 되는 문자열과 같으면 count를 올리고 아니라면 축소된 문자열(temp_str)에 저장을 해준다.  
count가 1 이상이면 같은 문자열이 있다는 뜻이므로 count+slice를 해주고 아니면 slice만 저장한다. 이를 반복해주며 가장 짧은 문자열을 찾아 리턴한다!

<br>

> **나의 풀이**

```javascript
function solution(s) {
  let ans = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let temp_str = "";
    let slice = s.slice(0, i);
    let count = 1;
    for (let j = i; j < s.length; j += i) {
      let slice2 = s.slice(j, j + i);
      if (slice === slice2) {
        count++;
      } else {
        temp_str += count > 1 ? count + slice : slice;
        slice = slice2;
        count = 1;
      }
    }
    temp_str += count > 1 ? count + slice : slice;
    if (temp_str.length < ans) {
      ans = temp_str.length;
    }
  }
  return ans;
}
```

<br><br>

## 위장

**접근법**  
의상 종류에 따른 의상의 갯수를 LOOP를 돌며 저장한다.  
그러면 경우의 수를 생각해보면 옷을 입는다, 안입는다 2가지의 상황이 있고 옷을 뽑는 일은 동시에 일어난다. 즉, 의상 종류에따른 갯수 외로 해당 옷을 뽑지 않는다는 경우의 수 추가가 필요하다. 그래서 모든 종류에 따른 갯수를 경우의 수로 생각하며 +1 을 해준다. (이 코드의 경우는 기본값을 2로 설정했다.) 그리고 사건은 동시에 일어나므로 서로를 곱해준다. 여기서 스파이는 적어도 하나의 옷은 갖추어 입어야하므로 모두 다 벗는 경우의 수를 1 빼준다. 처음에는 nCr - nPr 이런식으로 계산을 하다가 너무 복잡해서 인터넷을 찾아보니 이런 쉬운 방법이 있었다니!! 더 생각이 필요하다.

<br>

> **나의 풀이**

```javascript
function solution(clothes) {
  let kindOfClothe = {};
  let ans = 1;
  clothes.forEach((element) => {
    kindOfClothe[element[1]] = kindOfClothe[element[1]]
      ? kindOfClothe[element[1]] + 1
      : 2;
  });
  for (const key in kindOfClothe) {
    if (kindOfClothe.hasOwnProperty(key)) {
      ans *= kindOfClothe[key];
    }
  }
  return ans - 1;
}
```

<br><br>

## 타겟넘버

**접근법**  
dfs 깊이탐색. 노드의 부호를 하나씩 바꿔가며 스택을 쌓다가 node의 길이가 기존 배열의 길이와 같아질경우 모두를 더해본 뒤 타겟값과 같으면 ans++

<br>

> **나의 풀이**

```javascript
function solution(numbers, target) {
  let ans = 0;
  let sum = 0;

  const dfs = (numbers, node) => {
    if (node === numbers.length) {
      sum = 0;
      for (const num of numbers) {
        sum += num;
      }
      if (sum === target) {
        return ans++;
      }
    } else {
      numbers[node] *= 1;
      dfs(numbers, node + 1);
      numbers[node] *= -1;
      dfs(numbers, node + 1);
    }
  };
  dfs(numbers, 0);
  return ans;
}
```

<br><br>

## 괄호 변환

**접근법**  
올바른 괄호 문자열을 찾아내는 기준을 정하는 것이 포인트!! 만약 ")"이라는 괄호가 "("보다 많아지는 시점이 있는 순간 올바른 괄호가 아님이 포인트!! isCorrect 부분!! 나머지는 문제 그대로 따라하면 된다.

<br>

> **나의 풀이**

```js
function solution(p) {
  let right = 0;
  let left = 0;
  let isCorrect = true;
  let answer = "";

  if (p.length === 0) {
    return "";
  }

  for (let i = 0; i < p.length; i++) {
    const element = p[i];
    if (element === ")") {
      right++;
    } else {
      left++;
    }
    if (right > left) {
      isCorrect = false;
    }

    if (right === left) {
      let u = p.slice(0, i + 1);
      let v = p.slice(i + 1, p.length);
      console.log(`p : ${p}\n` + `u : ${u}\n` + `v : ${v}\n`);
      if (isCorrect === true) {
        answer = u + solution(v);
        console.log(`answer : ${answer}\n`);

        return answer;
      } else {
        answer += "(";
        answer += solution(v);
        answer += ")";
        u = u
          .slice(1, -1)
          .split("")
          .map((e, i) => {
            if (e === "(") {
              return ")";
            } else {
              return "(";
            }
          })
          .join("");
        answer += u;

        return answer;
      }
    }
  }
}
```

<br><br>

## 올바른 괄호

**접근법**  
위의 방법대로 똑같이 풀었는데 정답은 맞지만 효율성 체크에서 통과를 하지 못했다. For문 한번의 O(N)인데 이것마저 용서를 할 수 없나보다 그래서 stack을 사용해 풀었더니 32 ~ 34ms에서 8ms까지 줄어버렸다..!! stack을 활용합시당

<br>

> **나의 풀이**

```js
function solution(s) {
  let stack = [];
  let arrayStr = [...s];
  arrayStr.forEach((element) => {
    if (element === "(") {
      stack.push(element);
    } else if (stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      stack.push(element);
    }
  });
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
```

<br><br>

## 올바른 괄호

**접근법**  
효율성이 얼마나 더 좋아질 수 있을까?

<br>

> **나의 풀이**

```js
function solution(people, limit) {
  let left = 0;
  let right = people.length - 1;
  let boat = 0;
  const limits = limit;
  people.sort((a, b) => a - b);
  while (right > left) {
    let weight = people[left] + people[right];
    if (weight > limits) {
      right--;
    } else {
      left++;
      right--;
    }
    boat++;
  }
  if (right === left) {
    boat++;
  }
  return boat;
}
```

<br><br>

## 수식 최대화

**접근법**  
하루종일 삽질한 문제. 우선 순위를 어떤식으로 할당해줘야할까. 함수?? 배열?? 우선순위는 둘째치고 계산은 어떻게해야하는거지?? 생각이 복잡했고 결국 eval을 통해 문제를 풀었다. 다른 풀이를 보니 중위표현식을 후위표현식으로 바꿔서 푼 사람이 많았다. 비록 정석적인 풀이는 하지 못했지만 다시 배운다. 대단하다 카카오!

<br>

> **나의 풀이**

```js
function solution(expression) {
  const PLUS = "+";
  const MINUS = "-";
  const MUL = "*";
  const priority = [
    [PLUS, MINUS, MUL],
    [PLUS, MUL, MINUS],
    [MINUS, MUL, PLUS],
    [MINUS, PLUS, MUL],
    [MUL, MINUS, PLUS],
    [MUL, PLUS, MINUS],
  ];
  let answer = -1;

  for (const pri of priority) {
    const temp = expression.split(/(\D)/);
    for (const exp of pri) {
      while (temp.includes(exp)) {
        const idx = temp.indexOf(exp);
        temp.splice(
          idx - 1,
          3,
          eval(temp[idx - 1] + temp[idx] + temp[idx + 1])
        );
      }
    }
    answer = answer > Math.abs(temp[0]) ? answer : Math.abs(temp[0]);
  }
  return answer;
}
```

<br><br>

## 뉴스 클러스터링

**접근법**  
생각보다 오래 걸린 문제. 보자마자 음~ 필터로 거르고~ 합집합 교집합 나누기. 그래! 하지만 어림도 없었다. 문제는 다 풀었는데 요구조건을 간과해서 오래걸린 문제. 그리고 교집합을 만드는데 너무 오래 걸렸다. 처음에는 교집합을 필터 str1.filter(x => str2.includes(x)) 이런식으로 짰는데 문제점이 예제3에 있었다 만약. str1이 {aa,aa,aa} 이고 str2가 {aa,aa} 이면 정확한 결과가 나오지 않는다. str1을 돌면서 str2의 공통부분을 찾아야하는데 aa는 계속 존재하므로 aa가 3개 나와버린다. 그래서 temp배열을 복사하여 하나씩 빼는 과정을 더했고 마지막으로 분모, 분자에 0이 나오는 조건을 제대로 파악하지 못했다. 계산 못하면 65535~ 하고 바로 리턴했는데 계속 실패가 나서 30분 동안 들여다 봤다. 화가난다! 읽자 서우석!

<br>

> **나의 풀이**

```js
function solution(str1, str2) {
  const makeArr = (str) => {
    str = str.toLowerCase();
    const exp = new RegExp(/[A-Za-z]{2}/);
    let temp = [];
    for (let i = 0; i < str.length - 1; i++) {
      if (exp.test(str.substr(i, 2))) {
        temp.push(str.substr(i, 2));
      }
    }
    return temp;
  };

  const str1Arr = makeArr(str1);
  const str2Arr = makeArr(str2);
  let temp = str2Arr.slice();
  const intersection = str1Arr.filter((x) => {
    if (temp.includes(x)) {
      const idx = temp.indexOf(x);
      temp.splice(idx, 1);
      return x;
    }
  });
  const sumOfSetLength = str1Arr.length + str2Arr.length - intersection.length;

  if (sumOfSetLength === 0) {
    return 65536;
  } else if (intersection.length === 0) {
    return 0;
  } else {
    return Math.floor((intersection.length / sumOfSetLength) * 65536);
  }
}
```

<br><br>

## 프렌즈4블록

**접근법**  
본격 이게 맞아?? 풀이;; 어렵고 너무 난잡한코드. 사실 다른사람 코드 봐도 뭔소리인지 모르겠고 내 코드를 봐도 뭔소린지 모르겠다. 일단 중요한 함수 removeBlock() - board가 들어오면 2x2가 있는 배열의 좌상단 위치를 찾는다 예컨대 2번쨰 입출력예제라 치면 [1,0],[1,4],[2,1]이라고 할 수 있다. 해당 위치를 팡!스택에 넣어준뒤 그 반경의 배열을 모조리 지워준다!! substr함수를 이용했지만 뭔가 더 똑똑한 방법이 있을거같다. 근데 난 잘 모르겠다. 다음은 터트리고 난 뒤 구멍을 아래로 내리면서 메워줘야한다. 바로 fall()함수이다.  
fall() 함수가 들어오면 아래서부터 위로 그리고 오른쪽에서 왼쪽으로 돌면서 공백이 존재하는 위치를 찾아준다. 그리고 그 위치를 기억해준다음 더 위를 서치해준다. 만약 위에 공백이 아닌 문자가 나온다면 기억한 위치로 해당 문자를 넣어준다! 그리고 이 것을 계속 반복해준다.라는 단순한 기획이었는데 생각보다 잘 안돼서 코드가 너저분. 그리고 이 removeBlock()과 fall()을 계속해서 반복하다 더이상 변하지 않을 때 공백의 갯수를 구해 answer 값을 찾는다. 배열 비교함수는 블로그에서 긁어왔다 고마워요 블로그 이게 level2가 맞나요 근데?

<br>

> **나의 풀이**

```js
function solution(m, n, board) {
  let answer = 0;
  const removeBlock = (board) => {
    let temp = board.slice();
    let pangStack = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          temp[i][j] &&
          temp[i][j + 1] &&
          temp[i + 1][j] &&
          temp[i + 1][j + 1] &&
          temp[i][j] === temp[i][j + 1] &&
          temp[i][j + 1] === temp[i + 1][j] &&
          temp[i + 1][j] === temp[i + 1][j + 1] &&
          temp[i][j] === temp[i + 1][j + 1]
        ) {
          pangStack.push([i, j]);
        }
      }
    }
    pangStack.forEach((el) => {
      let i = el[0];
      let j = el[1];
      temp[i] = temp[i].substr(0, j) + "  " + temp[i].substr(j + 2);
      temp[i + 1] = temp[i + 1].substr(0, j) + "  " + temp[i + 1].substr(j + 2);
    });

    return temp;
  };

  const fall = (board) => {
    let temp = board.slice();
    for (let i = 0; i < n; i++) {
      for (let j = m - 1; j >= 0; j--) {
        if (temp[j][i] === " ") {
          for (let k = j - 1; k >= 0; k--) {
            if (temp[k][i] !== " ") {
              temp[j] =
                temp[j].substr(0, i) + temp[k][i] + temp[j].substr(i + 1);
              temp[k] = temp[k].substr(0, i) + " " + temp[k].substr(i + 1);
              break;
            }
          }
        }
      }
    }
    return temp;
  };

  function compareArray(arr1, arr2) {
    // 결과값
    var rst = false;

    // 길이가 다르면 다른 배열이라고 판단
    if (arr1.length != arr2.length) {
      return rst;
    }

    // arr1 배열의 크기만큼 반복
    arr1.forEach(function (item) {
      // arr1 배열 아이템이, arr2 배열에 있는지 확인
      // 있으면, arr2에 item이 존재하는 index 리턴
      // 없으면, -1 리턴
      var i = arr2.indexOf(item);

      // 존재하면, splice함수를 이용해서 arr2 배열에서 item 삭제
      if (i > -1) arr2.splice(i, 1);
    });

    // compare2의 길이가 0이면 동일하다고 판단.
    rst = arr2.length == 0;

    return rst;
  }

  //im-first-rate.tistory.com/79 [웃으면 1류다]
  let board2 = board.slice();

  while (true) {
    let lastBoard = board2.slice();
    board2 = removeBlock(board2);
    board2 = fall(board2);
    if (compareArray(board2, lastBoard)) {
      break;
    }
  }
  board2.forEach((el) => {
    for (const ell of el) {
      if (ell.match(/\W/)) {
        answer++;
      }
    }
  });
  return answer;
}
```

<br><br>

## 캐시

**접근법**
처음에 LRU가 뭔지 몰라 당황했던 문제 검색해보니 바로 기억. cacheSize가 0이면 MISS와 시티의 갯수를 곱해서 바로 리턴 나머지는 cities를 돌면서 city를 소문자로 만들어 규격을 맞춘 뒤 city가 존재하는지 확인. 있다면 time을 갱신해준뒤 HIT만큼 더하기 없다면 캐시사이즈와 갱신시간을 비교하며 지울 배열을 찾은뒤 삽입 및 제거 나같은 경우는 시간을 기준으로 정렬을 사용하여 Shift를 사용해 주었다.

<br>

> **나의 풀이**

```js
function solution(cacheSize, cities) {
  if (!cacheSize) return cities.length * 5;
  let arr = [];
  let time = 0;
  let answer = 0;
  cities.forEach((city) => {
    city = city.toLowerCase();
    const index = arr.findIndex((el) => el.city === city);
    if (index !== -1) {
      //배열 안에 시티가 있음
      arr[index].time = time++;
      answer++;
    } else {
      //배열 안에 시티가 없음
      arr.sort((a, b) => a.time - b.time);
      if (arr.length === cacheSize) {
        arr.shift();
        arr.push({ city, time: time++ });
      } else {
        arr.push({ city, time: time++ });
      }
      answer += 5;
    }
  });

  return answer;
}
```

<br><br>

## 후보키

**접근법**
속성별로의 조합을 만듬(getComb 함수) => 속성별의 슈퍼키를 만듬 (Comb를 filter) : 각 튜플의 정해진 속성을 뽑아 String으로 만든뒤 배열에 저장, 배열에 저장이 되있다면 유일성에 위배. false 리턴 => 슈퍼키로 후보키를 만듬(superKeys filter) : 후보키는 튜플을 구분할 최소한의 속성으로 이루어져야 함. 즉, 후보키에 슈퍼키의 부분집합이 있어서는 안됨.(superKey[i].every 부분)

<br>

> **나의 풀이**

```js
function solution(relation) {
  const getComb = (arr) => {
    let flag = new Array(arr.length).fill(false);
    const combs = [];

    const combFuc = (depth) => {
      if (depth === arr.length) {
        const comb = arr.filter((_, index) => flag[index]);
        combs.push(comb);
        return;
      }
      flag[depth] = true;
      combFuc(depth + 1);

      flag[depth] = false;
      combFuc(depth + 1);
    };

    combFuc(0);

    return combs;
  };
  const tupleToString = (tuple, set) => {
    return set.reduce((str, value) => {
      return str + tuple[value];
    }, "");
  };

  const attributes = new Array(relation[0].length)
    .fill(0)
    .map((value, index) => value + index);

  const comb = getComb(attributes);

  const superKeys = comb.filter((set) => {
    const tuples = [];

    for (const rel of relation) {
      const tupleStr = tupleToString(rel, set);
      if (tuples.includes(tupleStr)) {
        return false;
      } else {
        tuples.push(tupleStr);
      }
    }
    return true;
  });

  const candiadateKeys = superKeys.filter((key, index) => {
    for (let i = 0; i < superKeys.length; i++) {
      if (i === index) continue;
      if (superKeys[i].every((value) => key.includes(value))) return false;
    }

    return true;
  });

  return candiadateKeys.length;
}
```

<br><br>

## 카펫

**접근법**
갈 = 2(W+H)-4, 노 = W\*H-b

<br>

> **나의 풀이**

```js
function solution(brown, yellow) {
  const total = brown + yellow;
  for (let i = 1; i < total / 2; i++) {
    const heigth = i;
    const width = total / heigth;
    if (!Number.isInteger(width)) continue;

    if (
      2 * (width + heigth) - 4 === brown &&
      width * heigth - brown === yellow
    ) {
      return [width, heigth];
    }
  }
}
```

<br><br>


## 방금그곡

**접근법**  
musicinfos를 돌면서 정답이 될 수 있는 곡의 타이틀을 answers에 저장합니다. musicinfos를 나눠 곡의 시작시간, 끝난시간, 제목, 멜로디 등을 가져오고 시작 시간과 끝난시간을 Number로 바꾸어 멜로디와 함께 makeMelodyArr함수에 보내 시간에 따라 총 멜로디를 만듭니다 이 함수에서 #도 처리를 해주며 아예 다른 문자로 치환해줍니다. 그리고 배열을 전부 합쳐서 리턴해줍니다.   
그 후 m을 makeMelodyArr에 보낸 mm (#을 치환시키기 위함)과 songMelody를 비교해 songMelody에 mm이 있다면 answers에 시간과 제목을 넣어줍니다. 그리고 시간 순으로 소트를 해 라디오에서 가장 오래 들려준 객체를 위로 올린다음 첫번째 배열의 title 반환, 만약 없다면 (None) 리턴   
`(None)`을 리턴하면 문제가 틀린다. "(None)"이어야 하더라.

<br>

> **나의 풀이**

```javascript
function solution(m, musicinfos) {
    const makeMelodyArr = (melodies, time) => {
        let score = []
        for (let i = 0; i < melodies.length; i++) {
            if(melodies[i+1]==="#"){
                if(melodies[i]==="A")score.push("Q")
                if(melodies[i]==="C")score.push("W")
                if(melodies[i]==="D")score.push("R")
                if(melodies[i]==="F")score.push("T")
                if(melodies[i]==="G")score.push("Y")
                i++
            } else {
                score.push(melodies[i])
            }
        }
        if(time){
            let temp2 = []
            for (let j = 0; j < time; j++) {
                let idx = j % score.length
               temp2.push(score[idx])
            }
            return temp2.join("")
        } 
        return score.join("")
        
    }
    let answers =[]
    let idx = 1
    const mm = makeMelodyArr([...m])
    for (const musicinfo of musicinfos){
        const temp = musicinfo.split(",")
        const [startTime, endTime, title, melody] = temp
        const st = Number(startTime.split(":")[0])*60+Number(startTime.split(":")[1])
        const et = Number(endTime.split(":")[0])*60+Number(endTime.split(":")[1])
        const songMelody = makeMelodyArr([...melody],et-st)
        if(songMelody.includes(mm)){
            answers.push({time: et-st, title, idx})
        }
        idx++
    }
    if(answers.length !==0){
        answers.sort((a,b) => b.time-a.time)
        return answers[0].title
    } else {
        return "(None)"
    }
     
}
```

<br><br>

## 땅따먹기

**접근법**  
위에서부터 각 행에서의 최대값을 구한다. land[1]의 값들을 land[0]의 값들과 대조해 가장 큰 값을 저장하고 아래로 내려가면서 그 값을 활용하는 전형적인 dp문제.   
연속해서 같은 열은 밟을 수 없다는 조건을 유의해야합니다!

<br>

> **나의 풀이**

```javascript
function solution(land) {
  land.forEach((emts, idxs) => emts.forEach((emt, idx) => {
      if(idxs === 0) return
      const n = idxs - 1
      let max = 0
      for (let i = 0; i < emts.length; i++) {
          if(i === idx) continue
          max = Math.max(max, emt+land[n][i])
      }
      land[idxs][idx] = max
  }));
  return Math.max.apply(null, land[land.length-1])
}
```

<br><br>

# level3

## 목차

- [자물쇠와 열쇠](#자물쇠와-열쇠)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/60059)
- [불량 사용자](#불량-사용자)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/64064)
- [네트워크](#네트워크)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/43162)


<br>

## 자물쇠와 열쇠

**접근법**  
2차원 배열이라 너무 머리가 아팠다. 공부가 필요!! 일단 필요로하는 것은 Key를 회전하는 것! 그리고 해당 키를 모든 Lock 경우에 수에 대입을 하면서 홈에 맞는지 안맞는지 확인하는 것!! Lock에 모든 키를 대입하기 위해서 Key보다 큰 tempArr 2차원 배열을 생성하고 해당 배열의 가운대에 Lock을 놓고 key를 위에서부터 차례대로 돌면서 Lock쪽의 배열이 1으로만 이루어져있는지를 검사한다!! 생각보다 for문을 남발해서 효율성이 매우 안좋지만 마땅한 방법이 생각나지 않는다.

<br>

> **나의 풀이**

```js
function solution(key, lock) {
  let answer = false;
  const keyLength = key.length;

  //2차원 배열 회전 함수
  const rotate = (key) => {
    let rotatedKey = Array.from(Array(keyLength), () =>
      Array(keyLength).fill(0)
    );
    for (let i = 0; i < keyLength; i++) {
      for (let j = 0; j < keyLength; j++) {
        rotatedKey[i][j] = key[keyLength - 1 - j][i];
      }
    }
    return rotatedKey;
  };

  //tempArray 만드는 함수
  const makeTempArr = () => {
    let tempArray = Array.from(Array(keyLength * 4), () =>
      Array(keyLength * 4).fill(0)
    );
    //tempArray 중간에 lock 채움
    for (let k = keyLength, i = 0; k < keyLength + lock.length; k++, i++) {
      for (let n = keyLength, j = 0; n < keyLength + lock.length; n++, j++) {
        tempArray[k][n] = lock[i][j];
      }
    }
    return tempArray;
  };

  //존재하는 arr 초기화 함수
  const initArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].fill(0);
    }
    for (let k = keyLength, i = 0; k < keyLength + lock.length; k++, i++) {
      for (let n = keyLength, j = 0; n < keyLength + lock.length; n++, j++) {
        arr[k][n] = lock[i][j];
      }
    }
    return arr;
  };

  const isAnswer = (tempArray) => {
    for (let k = keyLength, i = 0; k < keyLength + lock.length; k++, i++) {
      for (let n = keyLength, j = 0; n < keyLength + lock.length; n++, j++) {
        if (tempArray[k][n] !== 1) {
          return false;
        }
      }
    }
    return true;
  };

  let tempArray = makeTempArr();

  const tempArrayLength = tempArray.length;

  //회전 4번
  for (let l = 0; l < 4; l++) {
    key = rotate(key);
    let row = -1;
    for (let k = 0; k < tempArrayLength - keyLength; k++) {
      row++;
      let column = -1;
      for (let n = 0; n < tempArrayLength - keyLength; n++) {
        column++;
        tempArray = initArr(tempArray);
        //가로 세로 설정한대로 2차원 배열에 키 삽입
        for (let i = row, keyW = 0; i < keyLength + row; i++, keyW++) {
          for (let j = column, keyH = 0; j < keyLength + column; j++, keyH++) {
            tempArray[i][j] = tempArray[i][j] + key[keyW][keyH];
          }
        }
        if (isAnswer(tempArray)) {
          answer = true;
          return answer;
        }
      }
    }
  }

  return answer;
}
```

<br>

## 불량 사용자

**접근법**  
각각의 banned_id를 정규식으로 표현하여 각 banned_id규칙마다 뽑힐 수 있는 user_id의 배열을 banArrs에 집어넣는다.
여기서 불량사용자가 될 수 있는 경우의 수를 뽑아내야하는데 temp객체를 만들어 {사용자 아이다 : Boolean} 조합을 이용하여 해당 사용자가 이미 뽑혀있는지, 뽑히지 않았는지에 대해 판단한다.

<br>

> **나의 풀이**

```js
function solution(user_id, banned_id) {
  const exps = banned_id.map((id) => {
    return new RegExp(`^${id.replace(/\*/g, ".")}$`);
  });
  let answer = 0;

  const banArrs = [];

  exps.forEach((exp) => {
    const banArr = [];
    user_id.forEach((user) => {
      if (exp.test(user)) {
        banArr.push(user);
      }
    });
    banArrs.push(banArr);
  });

  let temp = {};
  let temp2 = {};

  const search = (index, till) => {
    if (index === banArrs.length) {
      const s = [...till].sort().join("");
      if (temp2[s]) {
        return;
      }
      temp2[s] = true;
      answer++;
      return;
    }

    for (const banId of banArrs[index]) {
      if (temp[banId]) {
        continue;
      }
      temp[banId] = true;
      till.push(banId);
      search(index + 1, till);
      temp[banId] = false;
      till.pop();
    }
  };
  search(0, []);

  return answer;
}
```

<br>

## 네트워크

**접근법**  
전형적인 DFS 문제 각 정점별 visited배열을 선언 배열을 돌면서 방문하지 않은 지역을 찾아 탐색을 해주고 그 안에서 다시 for문을 돌려서 연결된 지점을 찾고 방문하지 않은 지역을 찾아 방문을 해준다. 더 이상 연결된 지점이 없다면 독립된 섬일 것이며 초기 dfs문을 빠져나갈 것이므로 아래에 ans++을 해준다.

<br>

> **나의 풀이**

```js
function solution(n, computers) {
let ans = 0
let visited = Array(n).fill(false)
  const dfs = (idx) => {
      visited[idx]=true
      for (let i = 0; i < computers.length; i++) {
          if(computers[idx][i] === 1 && !visited[i]){
              dfs(i)
          }
      }
  }
  computers.forEach((_, idx) => {
    if(!visited[idx]){
        dfs(idx)
        ans++
    }
  });
  
  return ans
}
```

<br>

## 단어 변환

**접근법**  
dfs를 이용한 접근을 했다. 전체적으로 hit을 .it, h.t, hi. 이렇게 변환하여 가능한 변환 단어 리스트를 구해서 배열에 쌓아놓고 하나하나 접근하며 target 단어가 나올때 까지 돌린다.

<br>

> **나의 풀이**

```js
function solution(begin, target, words) {
    if(!words.includes(target)) return 0

    let visited = []
    let tempWord = begin
    let min = 999999999
    let ans = 0
    let answer


    const possibleList = (reg) => {
        let stack = []
        const exp = new RegExp(`^${reg}$`)
       for (const word of words) {
           if(exp.test(word))stack.push(word)
       }
       console.log(reg, stack);
       return stack
    }

    const dfs = (word) => {
        //console.log(visited);
        let tempWord = word
        if(word === target){
            min = ans < min ? ans : min
            answer = min
            return
        }
        for (let i = 0; i < word.length; i++) {
            let changeWord = [...tempWord]
            changeWord.splice(i, 1, ".")
            let stack = possibleList(changeWord.join(""))
            for (const word of stack) {
                if(visited.includes(word))continue
                ans++
                visited.push(word)
                dfs(word)
                visited.pop(word)
                ans--
            }
            
        }
    }
    visited.push(begin)

    for (let i = 0; i < tempWord.length; i++) {
        let changeWord = [...tempWord]
        changeWord.splice(i, 1, ".")
        let stack = possibleList(changeWord.join(""))
        for (const word of stack) {
            ans++
            visited.push(word)
            dfs(word)
            visited.pop(word)
            ans--
        }
        
    }
    //console.log(answer);
    return answer

}
```