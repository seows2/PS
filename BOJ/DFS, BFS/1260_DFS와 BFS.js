/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input = ["4 5 1","1 2","1 3","1 4","2 4","3 4"];
function solution(input) {
    const [node, edge, start] = input.shift().split(" ").map(e=> Number(e))
    const arr = input.map(e=> e.split(" ").map(e => Number(e)))
    let visited = []
    
   const dfs = (node, edge, start, arr) => {
       for (let i = 0; i < array.length; i++) {
           const element = array[i];
           
       }
   }
   const bfs = (node, edge, start, arr) => {

   }

   const dfsRoute = dfs(node, edge, start, arr)
   const bfsRoute = bfs(node, edge, start, arr)
}

solution(input);
