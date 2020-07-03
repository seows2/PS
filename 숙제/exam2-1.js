/*
[2] 서로 다른 n 개의 실수(real number)가 배열 A[1...n]에 저장되어 있다.
여기서는 입력으로 주어지는 임의의 수 x 에 대한 순위인 sun(A, x)를 계산하는 문제를 생각한다.
정확하게 정의하자면 sun(A, x)는 배열 A 안에서 x 보다 작은 원소의 개수에 더하기 1 한 값이다.
예를 들어 배열 A가 (4,6,1,7,3)과 같이 주어졌다면,
sun(A, 3) = 2, sun(A, 1) = 1, sun(A,5) = 4 이다.

(a) 입력으로 주어지는 배열 A 가 오름차순으로 정렬되어 있는 경우,
임의의 입력 x 에 대하여 sun(A, x)를 계산하는 효율적인 알고리즘을 기술하고 분석하시오.

(b) 일반적인 경우(배열 A 가 정렬되어 있지 않은 경우)에 sun(A, x)를 계산하는 효율적인 알고리즘을 기술하고 분석하시오.
여기서는 아래의 함수 select(A, k)를 사용할 수 있으며, O(n)의 시간 복잡도를 갖도록 구현되어 있다고 가정한다.
select(A, k): A 에서 k 번째로 작은 원소(를 리턴한다) */

const solution = (A, x) => {
  let first = 0;
  let last = A.length - 1;
  let mid = 0;
  while (first <= last) {
    mid = Math.floor((first + last) / 2);

    if (A[mid] === x) {
      console.log("리턴");
      return mid + 1;
    }
    if (A[mid] > x) {
      console.log("왼쪽");
      last = mid - 1;
    } else {
      console.log("오른쪽");
      first = mid + 1;
    }
  }
  console.log(A[mid], mid);

  return A[mid] > x ? mid + 1 : mid + 2;
};
console.log(solution([1, 3, 4, 6, 7], 5));
