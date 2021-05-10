function solution(a, edges) {
    if (a.reduce((a, b) => a + b, 0) !== 0) return -1;

    const makeGraph = (numberOfNode, arr) => {
        let graph = Array.from({ length: numberOfNode }, () => new Array())
        arr.forEach(([from, to]) => {
            graph[from].push(to)
            graph[to].push(from)
        })
        return graph
    }

    const graph = makeGraph(a.length, edges);
    const nums = a.slice();
    const visited = Array(a.length).fill(false);
    const stack = [[0, null]];
    let answer = BigInt(0);

    while (stack.length) {
        const [cur, parent] = stack.pop();

        if (visited[cur]) {
            answer += BigInt(Math.abs(nums[cur]));
            nums[parent] += nums[cur];
            continue;
        }

        visited[cur] = true;
        stack.push([cur, parent]);

        for (const next of graph[cur]) {
            if (!visited[next]) stack.push([next, cur]);
        }
    }
    return answer;
}

solution([-5, 0, 2, 1, 2], [[0, 1], [3, 4], [2, 3], [0, 3]])