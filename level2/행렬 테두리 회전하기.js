function solution(rows, columns, queries) {
    const rotate = (query, map) => {
        const [x1, y1, x2, y2] = query;
        const origin = map[x1 - 1][y1 - 1];
        let temp = [];
        console.log(map, temp);



    }
    const map = Array.from({ length: rows }, (_, row) => Array.from({ length: columns }, (_, i) => rows * row + i + 1));
    let rotatedMap = map.slice();
    console.log(map);
    queries.forEach((query) => {
        const min = rotate(query, rotatedMap);
        console.log(min);
    })
}

solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]])