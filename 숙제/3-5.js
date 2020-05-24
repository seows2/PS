//연속 최대곱
const MIN_INTEGER = -99999;

const solution = (arr) => {
  let dp = Array(arr.length).fill(MIN_INTEGER);
  dp[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0 || dp[i - 1] === 0) {
      dp[i] = arr[i];
      continue;
    }
    dp[i] = Math.max(MIN_INTEGER, dp[i - 1]) * arr[i];
  }

  return Math.max(...dp);
};
console.log(solution([0, -6, -7, 0, 14, -7, 5]));
