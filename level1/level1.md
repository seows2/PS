# level1

## 목차

- [크레인 인형뽑기 게임](#크레인-인형뽑기-게임) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/64061)
- [완주하지 못한 선수](#완주하지-못한-선수) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/64061)
- [모의고사](#모의고사) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42840)


<br>



## 크레인 인형뽑기 게임

**접근법**   
우리가 알아야하는 정보는 배열 **각 행에서의 가장 끝 인형**과 **바구니 맨 위에 있는 인형의 종류**이다.   
따라서 나는 처음 moves의 배열을 돌며 어느 행을 탐색해야 하는지, 또 각 행에서 뽑아야하는 인형을 찾았다.
만약 인형이 존재하지 않는다면 뽑지말고 지나가야하므로 if조건을 주었고
인형이 존재한다면 box안의 인형의 종류와 뽑은 인형을 비교, 만약 같다면 박스의 맨 위 인형을 꺼낸다음 ans+=2 아니라면 박스에다가 인형을 집어넣는다. 그리고 크레인 안의 뽑은 인형을 없애준다.

>**나의 풀이**
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

>**나의 풀이**
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