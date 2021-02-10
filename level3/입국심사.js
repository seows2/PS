function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times[times.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = times.reduce((a, b) => a + Math.floor(mid / b), 0);
    if (cnt >= n) right = mid - 1;
    else left = mid + 1;
  }
  return left;
}
solution(6, [7, 10]);
