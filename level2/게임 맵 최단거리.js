function solution(maps) {
    const bfs = (startX, startY) => {
        let visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false))
        const queue = [[startX, startY]]
        visited[startX][startY] = true

        while (queue.length) {
            const [curX, curY] = queue.shift()


            dxy.forEach(([dx, dy]) => {
                const nx = curX + dx
                const ny = curY + dy

                if (nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length) {
                    if (maps[nx][ny] === 1 && !visited[nx][ny]) {
                        queue.push([nx, ny])
                        cnt[nx][ny] = cnt[curX][curY] + 1

                        visited[nx][ny] = true
                    }
                }
            })
        }

    }
    const cnt = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(0));
    const dxy = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    bfs(0, 0);
    const answer = cnt[maps.length - 1][maps[0].length - 1];
    return answer === 0 ? -1 : answer + 1;
}

solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1]
])