// 1,2,3

const solution = (N) => {
  let dp = Array(N + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[N];
};

console.log(solution(15));
