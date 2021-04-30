function solution(rows, columns, queries) {
    const rotate = (query, map) => {
        const [x1, y1, x2, y2] = query;
        const top = [];
        const right = [];
        const left = [];
        const bottom = [];

        //Top
        for (let i = y1 - 1; i < y2 - 1; i++) {
            top.push(map[x1 - 1][i])
        }
        //Right
        for (let i = x1 - 1; i < x2 - 1; i++) {
            right.push(map[i][y2 - 1])
        }
        //Bottom
        for (let i = y1; i < y2; i++) {
            bottom.push(map[x2 - 1][i])
        }
        //Left
        for (let i = x1; i < x2; i++) {
            left.push(map[i][y1 - 1])
        }

        //Top
        map[x1 - 1].splice(y1, y2 - y1, ...top);
        //Right
        let j = 0;
        for (let i = x1; i < x2; i++) {
            map[i].splice(y2 - 1, 1, right[j++])
        }
        //Bottom
        map[x2 - 1].splice(y1 - 1, y2 - y1, ...bottom);
        //Left
        j = 0;
        for (let i = x1 - 1; i < x2 - 1; i++) {
            map[i].splice(y1 - 1, 1, left[j++])
        }
        console.log(map);
        return Math.min(...top, ...right, ...left, ...bottom)

    }
    const map = Array.from({ length: rows }, (_, row) => Array.from({ length: columns }, (_, i) => columns * row + i + 1));
    let rotatedMap = map.slice();
    const answer = []
    //console.log(map);
    queries.forEach((query) => {
        const min = rotate(query, rotatedMap);
        answer.push(min)
    })
    return answer
}

solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]])