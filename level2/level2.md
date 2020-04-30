# level2

## 목차

- [H-Index](#H-Index)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42747)
- [숫자 야구](#숫자-야구)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42841)
- [쇠막대기](#쇠막대기)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42585)

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