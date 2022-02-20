/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5457", "3", "6 7 8"];
const REMOTE_BUTTON = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function solution(input) {
  const getNearestNumber = (targetNum, button) => {
    console.log(targetNum, button);
  };
  const [N, M] = input.splice(0, 2).map(Number);
  const button =
    M !== 0
      ? REMOTE_BUTTON.filter(
          (num) => !input[0].split(" ").map(Number).includes(num)
        )
      : REMOTE_BUTTON;
  const result = Math.abs(targetNum - 100);
  const nearestNumber = getNearestNumber(N, button);
}

solution(input);
