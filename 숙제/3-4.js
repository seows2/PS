//연속 최대합

const dp = (arr) => {
  let cache = Array(arr.length).fill(0);
  cache[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    cache[i] = Math.max(0, cache[i - 1]) + arr[i];
  }

  return Math.max(...cache);
};
console.log(dp([31, -41, 59, 26, -53, 58, 97, -93, -23, 84]));
