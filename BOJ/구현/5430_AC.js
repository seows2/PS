/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["3","DDRDRD","4","[100,100,99,40]","D","0","[]","RDD","4","[1,2,3,4]"];

function solution(input) {
    const T = Number(input.shift());
    const answer = [];
    for (let i = 0; i < T; i++) {
        const [P, N, arr] = input.splice(0, 3);
        let nums = [...arr].splice(1, arr.length-2).join("").split(",");
        if(N === "0") {nums = [];}
        const regex = new RegExp(/R{2}/,"g");
        const commands = P.replace(regex,"")

        let dir = true;
        let left = 0;
        let right = 0;
        for (const command of commands) {
            if(command === "R") {
                dir = !dir;
            } else {
                if(dir) left += 1;
                else right += 1;
            }
        }
        console.log(left, N - right);

        if(left + right <= N){
            nums = nums.slice(left, N - right);
            if(dir) answer.push("[" + nums.join(",") + "]");
            else answer.push("[" + nums.reverse().join(",") + "]");
        } else {
            answer.push("error")
        }
    }
    console.log(answer.join("\n"));

}

solution(input);
