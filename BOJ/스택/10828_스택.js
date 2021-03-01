/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["7","pop","top","push 123","top","pop","top","pop"];
const n = input.shift()
function solution(_,input) {
    const arr = input.map(e => e.split(" "))
    const stack = []
    let answer = ""
    arr.forEach(e => {
        if(e[0] === "push"){
            stack.push(e[1])
        } else if(e[0] === "top"){
            const temp = stack[stack.length-1]
            if(temp !== undefined){
                answer += `${temp}\n`
            } else {
                answer += `${-1}\n`
            }
        } else if(e[0] === "size"){
            answer += `${stack.length}\n`
        } else if(e[0] === "pop"){
            const temp = stack.pop()
            if(temp !== undefined){
                answer += `${temp}\n`
            } else {
                answer += `${-1}\n`
            }
        } else {
            //empty
            const temp = stack.length
            if(temp)  answer += `${0}\n`
            else answer += `${1}\n`
        }
    })
    console.log(answer.trim());
}
solution(n,input);
