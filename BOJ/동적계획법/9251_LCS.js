/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["ACAYKP", "CAPCAK"];

function solution(words) {
    const word1 = words[0]
    const word2 = words[1]
    let dp = Array.from({length: word1.length+1}, () => new Array(word2.length+1).fill(0))
    dp[0][0] = 0
    for (let i = 1; i < word1.length+1; i++) {
       for (let j = 1; j < word2.length+1; j++) {
          if(word1[i-1] === word2[j-1]){
              dp[i][j] = dp[i-1][j-1]+1
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
          }
       } 
    }
    console.log(dp[word1.length][word2.length]);
}

solution(input);
