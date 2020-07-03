//연속 최대합

const solution = (arr) => {
  let dp = Array(arr.length).fill(0);
  dp[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(0, dp[i - 1]) + arr[i];
  }

  return Math.max(...dp);
};
console.log(solution([31, -21, 57, -26, 53, 58, 95, -53, -23, 84]));
