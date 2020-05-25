//치즈 먹기
const solution = (N, M, arrs) => {
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
  map[M - 1].reduce((prev, curr, idx) => {
    dp[M - 1][idx] = prev + curr;
    return prev + curr;
  });
  for (let i = M - 2; i >= 0; i--) {
    dp[i] = [dp[M - 1][0] + dp[i][0]];
  }

  for (let y = M - 2; y >= 0; y--) {
    for (let x = 1; x < dp[M - 1].length; x++) {
      dp[y][x] =
        dp[y + 1][x] < dp[y][x - 1]
          ? dp[y][x - 1] + map[y][x]
          : dp[y + 1][x] + map[y][x];
    }
  }
  return dp[0][M - 1];
};

console.log(
  solution(3, 2, [
    [1, 2],
    [3, 1],
  ])
);
