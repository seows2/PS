function solution(n, build_frame) {
  let map = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  let answer = [];

  const go = (x, y, a, setup) => {
    if (setup) {
      if (a) {
        //보 설치
        if (canbuildBo(x, y)) buildBo(x, y);
      } else {
        //기둥 설치
        if (canbuildGi(x, y)) buildGi(x, y);
      }
    } else {
      if (a) {
        //보 삭제
        if (canRemoveBo(x, y)) removeBo(x, y);
      } else {
        //기둥 삭제
        if (canRemoveGi(x, y)) removeGi(x, y);
      }
    }
  };
  const canbuildBo = (x, y) => {
    console.log("보 설치", x, y);
    if (
      map[y][x] === 1 ||
      map[y][x] === 3 ||
      map[y][x + 1] === 3 ||
      map[y][x + 1] === 1 ||
      (map[y][x] === 2 && map[y][x + 1] === 2)
    )
      return true;
  };

  const canbuildGi = (x, y) => {
    console.log("기둥 설치", x, y);
    if (y === 5) return true;
    if (map[y][x] === 1 || map[y][x] === 2 || map[y][x] === 3) return true;
  };

  const canRemoveGi = (x, y) => {
    console.log("기둥 삭제", x, y);
    //맵 끝 기둥에 보가 없음
    if (x === 0 || x === n) {
      if (map[y - 1] !== 3) return true;
    }
    // 기둥 위에 기둥이 없음
    // 기둥 끝 양 옆에 보가 있음
    if (
      map[y - 2][x] !== 1 ||
      map[y - 2][x] !== 3 ||
      (map[y - 1][x] === 3 &&
        map[y - 1][x + 1] === 2 &&
        map[y - 1][x - 1] === 2)
    )
      return true;
  };

  const canRemoveBo = (x, y) => {
    console.log("보 삭제", x, y);
  };

  const buildBo = (x, y) => {
    answer.push([x, Math.abs(n - y), 1]);

    if (map[y][x] === 1 || map[y][x] === 3) {
      //설치하는 곳이 기둥인데.
      if (map[y][x + 1] === 1) {
        //기둥 옆에 기둥이 있어
        map[y][x] = 3;
        map[y][x + 1] = 3;
      } else {
        //기둥 옆에 아무것도 X 또는 보
        map[y][x] = 3;
        map[y][x + 1] = 2;
      }
    } else {
      //설치하는 곳에 보가 있어.
      if (map[y][x + 1] === 1 || map[y][x + 1] === 3) {
        //오른쪽에 기둥이 있어.
        map[y][x] = 2;
        map[y][x + 1] = 3;
      }
    }
  };

  const buildGi = (x, y) => {
    answer.push([x, Math.abs(n - y), 0]);
    if (map[y][x] === 0 || map[y][x] === 1) {
      map[y][x] = 1;
      map[y - 1][x] = 1;
    } else {
      map[y - 1][x] = 1;
    }
  };

  const removeBo = (x, y) => {
    const idx = answer.findIndex(
      (e) => e[0] === x && e[1] === Math.abs(n - y) && e[2] === 1
    );
    answer.splice(idx, 1);
    console.log("보 삭제 중", x, y);
  };
  const removeGi = (x, y) => {
    const idx = answer.findIndex(
      (e) => e[0] === x && e[1] === Math.abs(n - y) && e[2] === 0
    );
    answer.splice(idx, 1);
    console.log("기둥 삭제 중", x, y);
    if (map[y - 1][x] === 3) {
      map[y - 1][x] = 2;
      map[y][x] = 0;
    } else {
      map[y - 1][x] = 0;
      map[y][x] = 0;
    }
  };

  for (const info of build_frame) {
    const [x, y, a, setup] = info;
    const convertY = n - y;

    go(x, convertY, a, setup);
    console.log(map);
  }
  answer.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
  console.log(answer);
  return answer;
}

solution(5, [
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [2, 1, 0, 1],
  [2, 2, 1, 1],
  [5, 0, 0, 1],
  [5, 1, 0, 1],
  [4, 2, 1, 1],
  [3, 2, 1, 1],
]);
