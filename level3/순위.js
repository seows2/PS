function solution(n, results) {
  const graph = Array.from({ length: n }, () => new Array(n).fill(Infinity));
  const graphLength = graph.length;
  let answer = 0;

  for (let i = 0; i < graphLength; i++) {
    graph[i][i] = 0;
  }
  for (let i = 0; i < results.length; i++) {
    const [win, lose] = results[i];
    graph[win - 1][lose - 1] = 0;
  }
  for (let k = 0; k < graphLength; k++) {
    for (let i = 0; i < graphLength; i++) {
      if (graph[i][k] === Infinity) continue;
      for (let j = 0; j < graphLength; j++) {
        if (i === k || j === k || graph[k][j] === Infinity) continue;
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }
  graph.forEach((row, idx) => {
    let degree = 0;
    row.forEach((e) => (e === 0 ? degree++ : null));
    for (let i = 0; i < n; i++) {
      if (i === idx) continue;
      graph[i][idx] === 0 ? degree++ : null;
    }
    if (degree === n) answer++;
  });

  return answer;
}

solution(5, [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
]);
