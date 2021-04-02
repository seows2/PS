/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["5 2", "13 32 21 41 51"];

function solution(input) {
    const dfs = (idx, cnt) => {
        if(cnt === M){
            answer.push(arr.join(" "));
            return;
        }
        for (let i = 0; i < N; i++) {
            if(!visited[i]){
                arr.push(nums[i])
                visited[i] = true
                cnt++
                dfs(i, cnt)
                cnt--
                visited[i] = false
                arr.pop()
            }
        }
    }
    const [N, M] = input[0].split(" ").map(e => Number(e));
    const nums = input[1].split(" ").map(e => Number(e)).sort((a,b) => a-b);
    let visited = Array(N).fill(false);
    let arr = [];
    let answer = []

    dfs(0,0)

    console.log(answer.join("\n"));
}

solution(input);
