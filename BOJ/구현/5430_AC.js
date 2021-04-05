/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4", "RDD","4","[1,2,3,4]","DD","1","[42]","RRD","6","[1,1,2,3,5,8]","D","0","[]"];

function solution(input) {
    const T = Number(input.shift());
    const answer = [];
    for (let i = 0; i < T; i++) {
        const [P, N, arr] = input.splice(0, 3);
        let nums = arr.slice(1, arr.length-1).split(",");
        if(N === "0") {nums = [];}

        /*
         * RR이 연속으로 나오는 명령어는 불필요한 연산이므로 전부 없애버린다.
         * DRRD => DD
         */
        const regex = new RegExp(/R{2}/,"g");
        const commands = P.replace(regex,"")


        /*
         * dir 뒤집기 연산 판단. True면 정방향 False면 역방향
         * left 왼쪽에서 지워야할 요소
         * right 오른쪽에서 지워야할 요소
         */
        let dir = true;
        let left = 0;
        let right = 0;
        for (const command of commands) {
            if(command === "R") {
                dir = !dir;
            } else {
                //command가 "D"
                if(dir) left += 1;
                else right += 1;
            }
        }
        
        /*
         * 지워야할 총 갯수(left+right) 배열의 길이(N) 보다 크면 error
         */
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
