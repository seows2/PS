/* 
문제 설명

아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.
12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5
5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.
제한사항
N은 1 이상 9 이하입니다.
number는 1 이상 32,000 이하입니다.
수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
최솟값이 8보다 크면 -1을 return 합니다.
입출력 예
N	number	return
5	12	4
2	11	3
입출력 예 설명
예제 #1
문제에 나온 예와 같습니다.
예제 #2
11 = 22 / 2와 같이 2를 3번만 사용하여 표현할 수 있습니다.
출처
※ 공지 - 2020년 9월 3일 테스트케이스가 추가되었습니다. */


function solution(N, number) {
    const setArr = new Array(8).fill().map(() => new Set())
   for (let i = 0; i < 8; i++) {
       setArr[i].add(Number(N.toString().repeat(i+1)))
       for (let j = 0; j < i; j++) {
          for (const a of setArr[j]) {
              for (const b of setArr[i-j-1]) {
                  setArr[i].add(a+b)
                  setArr[i].add(a-b)
                  setArr[i].add(a*b)
                  setArr[i].add(a/b)               
              }
          }
       }
       if(setArr[i].has(number)){
           return i+1
       }
    }
   return -1
}

solution(5,12)