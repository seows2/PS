function solution(nodeinfo) {
    const nodeinfos = nodeinfo.map((info, idx) => [idx + 1, ...info]);
    nodeinfos.sort((a, b) => b[2] - a[2] || a[1] - b[1]);
    const root = nodeinfos.pop()

    console.log(nodeinfos);
}

solution([[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]]);