/*
문제 설명

자연수 수열이 주어질 때, 수열에서 같은 값이 연속해서 나오는 개수를 순서대로 나열하는 과정을 반복하려 합니다.
예를 들어 수열이 [1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3]일 때,
같은 값이 연속해서 나오는 개수를 순서대로 나열하면 [2, 2, 2, 1, 1, 3, 3]이 됩니다.
새로 구한 수열에서 다시 같은 값이 연속해서 나오는 개수를 순서대로 나열하면 [3, 2, 2]가 됩니다.
마찬가지 작업을 계속 반복하면 수열은 다음과 같이 변합니다.
[3, 2, 2] → [1, 2] → [1, 1] → [2] → [1] → [1] → [1] ...
이와 같이 처음 주어진 수열에 같은 값이 연속해서 나오는 개수를 순서대로 나열하는 과정을 계속해서 수행하면 마지막에는 [1]이 무한히 반복됩니다.
초기 수열이 담긴 배열 arr가 매개변수로 주어질 때, 최초로 [1]이라는 수열이 나올때까지 과정을 몇 번 수행했는지 return 하도록 solution 함수를 완성해주세요.
제한사항
arr의 길이는 1 이상 1,000 이하입니다.
arr의 원소는 1 이상 1,000 이하인 자연수입니다.
입출력 예
arr	result
[1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3]	6
[1,2,3]	3
[2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2]	5
[2]	1
입출력 예 설명
입출력 예 #1
문제 예시와 같습니다.
입출력 예 #2
다음과 같이 과정을 3번 수행하면 됩니다.
[1, 2, 3] → [1, 1, 1] → [3] → [1] ...
입출력 예 #2
다음과 같이 과정을 5번 수행하면 됩니다.
[2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2] → [2, 2, 2, 2, 3, 1, 1] → [4, 1, 2] → [1, 1, 1] → [3] → [1] ...
입출력 예 #2
다음과 같이 과정을 한 번만 수행하면 됩니다.
[2] → [1] ... */

function solution(arr) {
  let tempArr = [];
  let count = 1;
  let allCount = 0;
  while (true) {
    if (arr.length === 1) {
      allCount++;
      break;
    }
    arr.forEach((e, i) => {
      if (e !== arr[i + 1]) {
        tempArr.push(count);
        count = 1;
      } else {
        count++;
      }
    });
    allCount++;
    arr = tempArr;
    tempArr = [];
  }
  console.log(allCount);
}

solution([2]);