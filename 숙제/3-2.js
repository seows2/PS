//치즈 먹기
const solution = (N, M, arrs) => {
  //맵 2차원 배열 생성
  const map = Array.from(Array(M), () => Array(N).fill(0)).map((e, i) => {
    arrs.some((arr) => {
      if (arr[1] === M - i) {
        e[arr[0] - 1] = 1;
        return false;
      }
    });
    return e;
  });
  let dp = map.slice();
  //dp 복사
  map[M - 1].reduce((prev, curr, idx) => {
    dp[M - 1][idx] = prev + curr;
    return prev + curr;
  });
  //dp[0][x] 초기화
  for (let i = M - 2; i >= 0; i--) {
    dp[i] = [dp[M - 1][0] + dp[i][0]];
  }
  //dp[y][0]초기화
  for (let y = M - 2; y >= 0; y--) {
    for (let x = 1; x < dp[M - 1].length; x++) {
      dp[y][x] =
        dp[y + 1][x] < dp[y][x - 1]
          ? dp[y][x - 1] + map[y][x]
          : dp[y + 1][x] + map[y][x];
    }
  }
  //dp[y][x] = max(dp[y+1][x], dp[y][x-1]) + map[x][y] 점화식 계산
  return dp[0][M - 1];
};

console.log(
  solution(3, 2, [
    [1, 2],
    [3, 1],
  ])
);
