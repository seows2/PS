function solution(k, dungeons) {
  const dfs = (depth, k, visited, dungeons) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= k) {
        visited[i] = true;
        dfs(depth + 1, k - dungeons[i][1], visited, dungeons);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, depth);
  };
  let answer = 0;

  const visited = Array(dungeons.length).fill(false);

  dfs(0, k, visited, dungeons);

  return answer;
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
