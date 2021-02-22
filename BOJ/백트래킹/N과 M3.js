
/* const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' '); */


const input = ["7", "7"]

const N = Number(input[0])
const M = Number(input[1])
let visited = new Array(M).fill(false)
let arr = []
let str = ""

const dfs = (cnt) => {
    if (cnt === M) {
        str = str +`${arr.join(" ")}\n`
        return
    }
    for (let i = 0; i < N; i++) {
        arr.push(i + 1)
        cnt++
        dfs(cnt)
        cnt--
        arr.pop()
    }
}


dfs(0)
console.log(str);
