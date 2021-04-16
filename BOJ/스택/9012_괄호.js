/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["6",
    "(())())",
    "(((()())()",
    "(()())((()))",
    "((()()(()))(((())))()",
    "()()()()(()()())()",
    "(()((())()("]
function solution(input) {
    input.shift();
    const isCorrect = (items) => {
        let left = 0; // )
        let right = 0 // (
        for (const item of items) {
            if (item === ")") {
                left++;
            } else {
                right++;
            }

            if (left > right) {
                return "NO"
            }
        }
        if (left === right) {
            return "YES"
        }
        return "NO"

    }

    const answer = input.map(items => isCorrect([...items]));

    console.log(answer.join("\n"));

}
solution(input);
