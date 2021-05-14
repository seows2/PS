function solution(dirs) {
    const isVaild = (x, y) => {
        if (x >= -5 && x <= 5 && y >= -5 && y <= 5) return true;
        return false;
    }
    const isIncludes = (paths, info) => {
        const [tx, ty, tfx, tfy] = info;
        for (const [x, y, fx, fy] of paths) {
            if ((x === tx && y === ty && fx === tfx && fy === tfy)
                || (x === tfx && y === tfy && fx === tx && fy === ty)
            ) return true;
        }
        return false;
    }
    const dirArr = [...dirs];
    const paths = [];
    const dxy = [[1, 0], [0, -1], [-1, 0], [0, 1]] //오른, 아래, 왼, 위
    const obj = { R: 0, D: 1, L: 2, U: 3 };
    let answer = 0;
    let curX = 0;
    let curY = 0;

    for (const dir of dirArr) {
        const [dx, dy] = dxy[obj[dir]];
        const tempX = curX + dx;
        const tempY = curY + dy;
        if (isVaild(tempX, tempY)) {
            const info = [tempX, tempY, curX, curY];
            if (!isIncludes(paths, info)) answer++;
            paths.push(info);

            curX = tempX;
            curY = tempY;
        }
    }
    console.log(answer);
}
solution("ULURRDLLU")