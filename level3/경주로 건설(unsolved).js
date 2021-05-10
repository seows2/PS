function solution(board) {
  const STRAIGHT = 100;
  const CORNER = 500;
  const dxy = [[0, 1], [1, 0], [0, -1], [-1, 0]] //오른, 아래, 왼, 위
  // (1 1) 1 2, 2 1, 1 0, 0 1

  const isConfict = (dx, dy) => {
    if (dx < 0 || dx >= board.length || dy < 0 || dy >= board.length) return true;

    return false;
  }

  const bfs = (startX, startY) => {
    const queue = [[startX, startY, null, 0]]; //x, y, dir, cost
    const visited = Array.from({ length: board.length }, () => Array(board.length).fill(Infinity));
    visited[startX][startY] = 0;

    while (queue.length) {
      const [curX, curY, curDir, curCost] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const dx = curX + dxy[i][0];
        const dy = curY + dxy[i][1];
        let cost = 0;
        if (isConfict(dx, dy)) continue;
        if (curDir === null || curDir === i) cost = STRAIGHT;
        else cost = CORNER + 100;
        const totalCost = curCost + cost

        if (board[dx][dy] === 0 && visited[dx][dy] >= totalCost) {
          visited[dx][dy] = totalCost;
          queue.push([dx, dy, i, totalCost]);
        }
      }
    }
    return visited[board.length - 1][board.length - 1];
  }


  const answer = bfs(0, 0, board.length);
  return answer
}

solution([[0, 0, 1, 0], [0, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]]);

[
  [100, 200, 300, 400, 500, 600, 700, Infinity],
  [200, 700, 800, 900, 1000, 1100, 1200, 1700],
  [300, 800, 900, 1000, 1100, Infinity, 1300, 1800],
  [400, 900, 1000, 1100, Infinity, 1900, 1400, 1900],
  [500, 1000, 1100, Infinity, 2100, 2000, 1500, Infinity],
  [600, 1100, Infinity, 3100, 2600, 2500, Infinity, 4100],
  [700, Infinity, 3300, 3200, 2700, Infinity, 3900, 4000],
  [Infinity, 3500, 3400, 3300, 2800, 3300, 3400, 3500]
]
[
  [0, 100, Infinity, 1500],
  [100, 700, 800, 900],
  [200, Infinity, 1400, Infinity],
  [Infinity, 2100, 1500, 2100]
]