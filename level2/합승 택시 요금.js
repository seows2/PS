function solution(n, s, a, b, fares) {
  const graph = Array.from({ length: n }, () => []);
  const map = [];

  fares.forEach(([a, b, w]) => {
    graph[a - 1].push([b - 1, w]);
    graph[b - 1].push([a - 1, w]);
  });

  for (let i = 0; i < n; i++) {
    const dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    const visited = new Array(n).fill(false);
    const queue = [];
    queue.push(i);
    dist[i] = 0;

    while (queue.length) {
      const curr = queue.sort((a, b) => dist[a] - dist[b]).shift();
      if (visited[curr]) continue;
      visited[curr] = true;

      graph[curr].forEach(([next, w]) => {
        if (dist[next] > dist[curr] + w) {
          dist[next] = dist[curr] + w;
          queue.push(next);
        }
      });
    }
    map.push(dist);
  }
  let answer = Infinity;
  console.log(map);
  for (let i = 0; i < n; i++) {
    const sum = map[s - 1][i] + map[i][a - 1] + map[i][b - 1];
    answer = answer > sum ? sum : answer;
  }
  console.log(answer);
  return answer;
}

solution(6, 4, 5, 6, [
  [2, 6, 6],
  [6, 3, 7],
  [4, 6, 7],
  [6, 5, 11],
  [2, 5, 12],
  [5, 3, 20],
  [2, 4, 8],
  [4, 3, 9],
]);
