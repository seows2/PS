function solution(n, edge) {
    let answer = []
    let visited = []
    let edges = JSON.parse(JSON.stringify(edge));
    edge.forEach(e => edges.push(e.reverse()));
    console.log(edges);
    
    const dfs = (temp, currentPlace, dest) => {
        if(edges[currentPlace][1] === dest){
            temp.push(dest)
            const temp1 = temp.slice();
            answer.push(temp1);
            return
        }

        for (let i = 0; i < edges.length; i++) {
            if (!visited[edges[i][0]] && edges[currentPlace][1] === edges[i][0] && !(edges[currentPlace][1] === edges[i][0] && edges[currentPlace][0] === edges[i][1])) {
                visited[edges[i][0]] = true;
                temp.push(edges[i][0]);
                console.log(dest, temp, visited, currentPlace, i);
                dfs(temp, i, dest);
                temp.pop();
                visited[edges[i][0]] = false;
              }
        }
    }

    for (let dest = 2; dest < n+1; dest++) {
        for (let i = 0; i < edges.length; i++) {
            let temp = []
            if(edges[i][0] !== 1) continue
            visited[edges[i][0]]= true
            temp.push(edges[i][0])
            dfs(temp, i, dest)
            temp.pop()
            visited[edges[i][0]]= false
        }
        
    }
    console.log(answer);
}

solution(6,	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])

/* [
    [ 3, 6 ], [ 4, 3 ],
    [ 3, 2 ], [ 1, 3 ],
    [ 1, 2 ], [ 2, 4 ],
    [ 5, 2 ], [ 6, 3 ],
    [ 3, 4 ], [ 2, 3 ],
    [ 3, 1 ], [ 2, 1 ],
    [ 4, 2 ], [ 2, 5 ]
  ] 
   console.log(dest, temp, visited, currentPlace, i);

   (edges[currentPlace][1] === edges[i][0] && edges[currentPlace][0] === edges[i][1]
  */