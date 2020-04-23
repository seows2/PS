# level1

## 목차

- [크레인 인형뽑기 게임](#크레인-인형뽑기-게임) [(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/64061)


<br>



## 크레인 인형뽑기 게임

**접근법**   
우리가 알아야하는 정보는 배열 **각 행에서의 가장 끝 인형**과 **바구니 맨 위에 있는 인형의 종류**이다.   
따라서 나는 처음 moves의 배열을 돌며 어느 행을 탐색해야 하는지, 또 각 행에서 뽑아야하는 인형을 찾았다.
만약 인형이 존재하지 않는다면 뽑지말고 지나가야하므로 if조건을 주었고
인형이 존재한다면 box안의 인형의 종류와 뽑은 인형을 비교, 만약 같다면 박스의 맨 위 인형을 꺼낸다음 ans+=2 아니라면 박스에다가 인형을 집어넣는다. 그리고 크레인 안의 뽑은 인형을 없애준다.

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
