function solution(N, road, K) {
    const makeGraph = (N, road) => {
        const graph = Array.from({ length: N }, () => []);
        road.forEach(([from, to, time]) => {
            graph[from - 1].push([to - 1, time]);
            graph[to - 1].push([from - 1, time]);
        })
        return graph
    }
    const bfs = (N, graph, K) => {
        const queue = [[0, 0]];
        let minCost = Array(N).fill(Infinity);
        minCost[0] = 0;
        while (queue.length) {
            const [cur, curTime] = queue.shift();
            graph[cur].forEach(([nextV, nextTime]) => {
                const time = curTime + nextTime;
                if (minCost[nextV] >= time) {
                    minCost[nextV] = time;
                    queue.push([nextV, time])
                }
            })

        }
        return minCost.filter(e => e <= K).length;

    }

    const graph = makeGraph(N, road);
    const answer = bfs(N, graph, K);
    return answer;
}

solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4)