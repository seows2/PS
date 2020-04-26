# level2

## 목차

- [H-Index](#H-Index)[(문제링크)](https://programmers.co.kr/learn/courses/30/lessons/42747)

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
