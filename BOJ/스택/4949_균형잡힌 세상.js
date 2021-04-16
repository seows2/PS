/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = [
    "So when I die (the [first] I will see in (heaven) is a score list).",
    "[ first in ] ( first out ).",
    "Half Moon tonight (At least it is better than no Moon at all].",
    "A rope may form )( a trail in a maze.",
    "Help( I[m being held prisoner in a fortune cookie factory)].",
    "([ (([( [ ] ) ( ) (( ))] )) ]).",
    " .",
    ".",
]
function solution(input) {
    const isCorrect = (strings) => {
        if (strings === ".") return "";
        const regex = new RegExp(/\[|\]|\(|\)/, "g");
        const regexString = strings.match(regex);
        if (!regexString) return "yes"
        const stack = [];

        for (const item of regexString) {
            if (item === "(" || item === "[") stack.push(item);

            if (item === ")") {
                if (stack.length && stack[stack.length - 1] === "(") {
                    stack.pop();
                } else {
                    return "no"
                }
            }

            if (item === "]") {
                if (stack.length && stack[stack.length - 1] === "[") {
                    stack.pop();
                } else {
                    return "no"
                }
            }
        }
        if (!stack.length) return "yes"

        return "no"

    }

    const answer = input.map(string => isCorrect(string))
    console.log(answer.join("\n").trim());
}
solution(input);
