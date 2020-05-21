const MAX_INTEGER = 999999999;

const solution = (k) => {
  const coin = [1, 4, 7, 13, 28, 52, 91, 365];
  let dp = Array(k + 1).fill(MAX_INTEGER);
  dp[0] = 0;
  coin.forEach((e) => {
    for (let j = e; j <= k; j++) {
      dp[j] = Math.min(dp[j], dp[j - e] + 1);
    }
  });
  return dp[k];
};

console.log(solution(364));
