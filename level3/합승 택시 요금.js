function solution(n, s, a, b, fares) {
  const graph = Array.from({ length: n }, () => []);
  const map = [];

  fares.forEach(([a, b, w]) => {
    graph[a - 1].push([b - 1, w]);
    graph[b - 1].push([a - 1, w]);
  });

  for (let i = 0; i < n; i++) {
    const dist = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);
    const queue = [];
    queue.push(i);
    dist[i] = 0;

    while (queue.length) {
      const curr = queue.sort((a, b) => dist[a] - dist[b]).shift();
      if (visited[curr]) continue;
      visited[curr] = true;

      graph[curr].forEach(([next, w]) => {
        const temp = dist[curr] + w;
        if (dist[next] > temp) {
          dist[next] = temp;
          queue.push(next);
        }
      });
    }
    map.push(dist);
  }
  console.log(map);
  let answer = Infinity;

  for (let i = 0; i < n; i++) {
    const sum = map[s - 1][i] + map[i][a - 1] + map[i][b - 1];
    if (answer > sum) answer = sum;
  }
  console.log(answer);
  return answer;
}

function solution2(n, s, a, b, fares) {
  const FW = (graph) => {
    const graphL = graph.length;
    for (let i = 0; i < graphL; i++) {
      for (let j = 0; j < graphL; j++) {
        for (let k = 0; k < graphL; k++) {
          if (graph[j][k] > graph[j][i] + graph[i][k]) {
            graph[j][k] = graph[j][i] + graph[i][k];
          }
        }
      }
    }
  };

  const graph = Array.from({ length: n }, () => new Array(n).fill(Infinity));
  fares.forEach(([s, e, w]) => {
    graph[s - 1][e - 1] = w;
    graph[e - 1][s - 1] = w;
  });
  graph.forEach((_, i) => {
    graph[i][i] = 0;
  });
  FW(graph);
  let answer = Infinity;

  for (let i = 0; i < n; i++) {
    const sum = graph[s - 1][i] + graph[i][a - 1] + graph[i][b - 1];
    if (answer > sum) answer = sum;
  }
  console.log(answer);
  return answer;
}

solution2(6, 4, 6, 2, [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
]);
