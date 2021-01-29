function solution(n, s, a, b, fares) {
  const graph = Array.from({ length: n }, () => []);
  const map = [];

  fares.forEach(([a, b, w]) => {
    graph[a - 1].push([b - 1, w]);
    graph[b - 1].push([a - 1, w]);
  });

  for (let i = 1; i <= n; i++) {
    let visited = new Array(n).fill(false);
    let minWeight = new Array(n).fill(Infinity);
    let queue = [...graph[i - 1]];
    visited[i - 1] = true;
    minWeight[i - 1] = 0;

    while (queue.length) {
      const [cur, totalWeight] = queue.shift();
      visited[cur] = true;
      if (!minWeight[cur]) {
        minWeight[cur] = totalWeight;
      } else {
        minWeight[cur] =
          minWeight[cur] >= totalWeight ? totalWeight : minWeight[cur];
      }

      graph[cur].forEach(([place, eWeight]) => {
        if (!visited[place]) {
          queue.push([place, totalWeight + eWeight]);
        }
      });
    }
    map.push(minWeight);
  }
  let answer = Infinity;
  console.log(map);

  for (let i = 0; i < n; i++) {
    const sum = map[s - 1][i] + map[i][a - 1] + map[i][b - 1];
    console.log(sum, answer);
    answer = answer > sum ? sum : answer;
  }
  console.log(answer);
  return answer;
}

solution(7, 3, 4, 1, [
  [5, 7, 9],
  [4, 6, 4],
  [3, 6, 1],
  [3, 2, 3],
  [2, 1, 6],
]);
