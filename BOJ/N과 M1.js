
const input = ["4", "2"]

const N = Number(input[0])
const M = Number(input[1])
let visited = new Array(M).fill(false)
let arr = []

const dfs = (cnt) => {
    if(cnt === M){
        console.log(arr.join(" "));
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
