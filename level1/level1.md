# level1

## 목차

- [크레인 인형뽑기 게임](#크레인-인형뽑기-게임) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/64061)
- [완주하지 못한 선수](#완주하지-못한-선수) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/64061)
- [모의고사](#모의고사) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42840)
- [체육복](#체육복) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42862)
- [2016년](#2016년)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/12901)
- [K번째수](#K번째수)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42748)
- [실패율](#실패율)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42889)
- [자연수 뒤집어 배열로 만들기](#자연수-뒤집어-배열로-만들기)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/12932)

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
문제에 다 나와있는 경우였지만 뭐가 틀린거지 한참을 들여다 봤던 문제. 조금 더 꼼꼼히 있고 요구사항에 맞는 로직을 구현해야겠다.  
기본적인 접근 방법은 stage 값를 따로 주기 귀찮아 FOR문을 돌며 stages를 돌며 현재 해당 스테이지를 클리어하지 못한사람, 이 스테이지에 도전했던 사람들을 모두 구하여 실패율을 구하고 실패율s 배열에 객체를 넘겨 실패율과 스테이지별로 정렬을 하여 리턴한다!

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
