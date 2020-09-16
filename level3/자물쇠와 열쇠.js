/* 문제 설명

고고학자인 튜브는 고대 유적지에서 보물과 유적이 가득할 것으로 추정되는 비밀의 문을 발견하였습니다.
그런데 문을 열려고 살펴보니 특이한 형태의 자물쇠로 잠겨 있었고
문 앞에는 특이한 형태의 열쇠와 함께 자물쇠를 푸는 방법에 대해 다음과 같이 설명해 주는 종이가 발견되었습니다.
잠겨있는 자물쇠는 격자 한 칸의 크기가 1 x 1인 N x N 크기의 정사각 격자 형태이고
특이한 모양의 열쇠는 M x M 크기인 정사각 격자 형태로 되어 있습니다.
자물쇠에는 홈이 파여 있고 열쇠 또한 홈과 돌기 부분이 있습니다.
열쇠는 회전과 이동이 가능하며 열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조입니다. 자물쇠 영역을 벗어난 부분에 있는 열쇠의 홈과 돌기는 자물쇠를 여는 데 영향을 주지 않지만, 자물쇠 영역 내에서는 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 하며 열쇠의 돌기와 자물쇠의 돌기가 만나서는 안됩니다. 또한 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있습니다.
열쇠를 나타내는 2차원 배열 key와 자물쇠를 나타내는 2차원 배열 lock이 매개변수로 주어질 때,
열쇠로 자물쇠를 열수 있으면 true를, 열 수 없으면 false를 return 하도록 solution 함수를 완성해주세요.

제한사항
key는 M x M(3 ≤ M ≤ 20, M은 자연수)크기 2차원 배열입니다.
lock은 N x N(3 ≤ N ≤ 20, N은 자연수)크기 2차원 배열입니다.
M은 항상 N 이하입니다.
key와 lock의 원소는 0 또는 1로 이루어져 있습니다.
0은 홈 부분, 1은 돌기 부분을 나타냅니다.

입출력 예
key	                                lock	                            result
[[0, 0, 0], [1, 0, 0], [0, 1, 1]]	[[1, 1, 1], [1, 1, 0], [1, 0, 1]]	true
입출력 예에 대한 설명
자물쇠.jpg
key를 시계 방향으로 90도 회전하고, 오른쪽으로 한 칸, 아래로 한 칸 이동하면 lock의 홈 부분을 정확히 모두 채울 수 있습니다. */

function solution(key, lock) {
  let answer = false;
  const keyLength = key.length;

  //2차원 배열 회전 함수
  const rotate = (key) => {
    let rotatedKey = Array.from(Array(keyLength), () =>
      Array(keyLength).fill(0)
    );
    for (let i = 0; i < keyLength; i++) {
      for (let j = 0; j < keyLength; j++) {
        rotatedKey[i][j] = key[keyLength - 1 - j][i];
      }
    }
    return rotatedKey;
  };

  //Key 제곱 크기의 2차원 배열 할당

  //tempArray 만드는 함수
  const makeTempArr = () => {
    let tempArray = Array.from(Array(keyLength * 4), () =>
      Array(keyLength * 4).fill(0)
    );
    //tempArray 중간에 lock 채움
    for (let k = keyLength, i = 0; k < keyLength + lock.length; k++, i++) {
      for (let n = keyLength, j = 0; n < keyLength + lock.length; n++, j++) {
        tempArray[k][n] = lock[i][j];
      }
    }
    return tempArray;
  };

  //존재하는 arr 초기화 함수
  const initArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].fill(0);
    }
    for (let k = keyLength, i = 0; k < keyLength + lock.length; k++, i++) {
      for (let n = keyLength, j = 0; n < keyLength + lock.length; n++, j++) {
        arr[k][n] = lock[i][j];
      }
    }
    return arr;
  };

  const isAnswer = (tempArray) => {
    for (let k = keyLength, i = 0; k < keyLength + lock.length; k++, i++) {
      for (let n = keyLength, j = 0; n < keyLength + lock.length; n++, j++) {
        if (tempArray[k][n] !== 1) {
          return false;
        }
      }
    }
    return true;
  };

  let tempArray = makeTempArr();

  const tempArrayLength = tempArray.length;

  //회전 4번
  for (let l = 0; l < 4; l++) {
    key = rotate(key);
    let row = -1;
    for (let k = 0; k < tempArrayLength - keyLength; k++) {
      row++;
      let column = -1;
      for (let n = 0; n < tempArrayLength - keyLength; n++) {
        column++;
        tempArray = initArr(tempArray);
        //가로 세로 설정한대로 2차원 배열에 키 삽입
        for (let i = row, keyW = 0; i < keyLength + row; i++, keyW++) {
          for (let j = column, keyH = 0; j < keyLength + column; j++, keyH++) {
            tempArray[i][j] = tempArray[i][j] + key[keyW][keyH];
          }
        }
        if (isAnswer(tempArray)) {
          answer = true;
          return answer;
        }
      }
    }
  }

  return answer;
}
console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
);
