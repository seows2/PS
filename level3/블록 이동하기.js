function solution(board) {
    const N = board.length;

    const curPos = [[0,0],[0,1]];

    const bfs = (start, graph, numberOfNode) => {
        const visited = Array.from({length: N}, () => Array(N).fill(false))

    }
    bfs()

}

solution([
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0]
    ])