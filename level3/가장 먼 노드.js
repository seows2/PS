function solution(n, edge) {
  const graph = Array.from({ length: n }, () => []);

  edge.forEach(([a, b]) => {
    graph[a - 1].push(b - 1);
    graph[b - 1].push(a - 1);
  });
  console.log(graph);

  const queue = [[0, 0]];
  const visited = [true];
  const depNum = [];

  while (queue.length) {
    const [cur, dep] = queue.shift();
    console.log(cur, dep, queue);
    depNum[dep] = depNum[dep] ? depNum[dep] + 1 : 1;
    graph[cur].forEach((e) => {
      if (!visited[e]) {
        visited[e] = true;
        queue.push([e, dep + 1]);
      }
    });
  }
  console.log(depNum);
  return depNum[depNum.length - 1];
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);

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

  */
