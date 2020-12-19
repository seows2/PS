
/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
*/

const input = ["4", "2"]

const N = Number(input[0])
const M = Number(input[1])
let visited = new Array(M).fill(false)
let arr = []
let memo = []

const dfs = (cnt) => {
    if(cnt === M){
        const temp = arr.slice().sort((a,b) => a-b).join(" ")
        if(memo.length === 0 || !memo.includes(temp)){
            memo.push(temp)
            console.log(arr.join(" "));
        }
    return
    }
    for (let i = 0; i < N; i++) {
        if(!visited[i]){
            visited[i] = true
            arr.push(i+1)
            cnt++
            dfs(cnt)
            cnt--
            visited[i] = false
            arr.pop()  
        }
    }
}


dfs(0)

