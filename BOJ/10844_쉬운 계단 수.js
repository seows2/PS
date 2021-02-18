/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = "2";

//1 -> 1, 2, 3, 4, 5, 6, 7, 8, 9 9개

//2 -> 10, 21, 32, 43, ..., 98 9개 아래
//  -> 12, 23, 34, 45, ..., 89 8개 위

//3 -> 123, 234, ..., 789 7개 위위
//  -> 210, 321, ... 987 8개  아래아래
//  -> 121, 232, ... 898 8개  위아래
//  -> 101, 212, ... 989 9개  아래위
function solution(n) {
  let dp = Array.from({ length: n }, () => new Array(9).fill(0));
  for (let i = 1; i < 10; i++) {
    dp[1][i] = 1;
  }
  console.log(dp);
}

solution(Number(input));
