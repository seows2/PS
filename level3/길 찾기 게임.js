function solution(nodeinfo) {
    const nodeinfos = nodeinfo.map((info, idx) => [...info, idx + 1]);
    nodeinfos.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    const root = nodeinfos.pop()
    const tree = [null, root[2]];
    let cur = 1;
    let left = cur * 2;
    let right = cur * 2 + 1;
    nodeinfos.forEach(([x, y, idx]) => {
        console.log(left, right);
    })
    console.log(nodeinfos);
}

solution([[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]]);