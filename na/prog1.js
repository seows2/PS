/* 문제 설명

석이는 새로 생명보험에 가입하려 합니다. 보험에는 암, 치매 등 다양한 항목들을 보장해 주는 상품들이 있는데,
석이는 모든 항목을 보장받고 싶습니다. 따라서 보험에 최대한 적게 가입해 모든 항목을 보장받는 방법을 찾으려 합니다.
다음은 4가지 항목에 대해서 각 보험 상품이 보장해 주는 내용을 표로 정리한 예시입니다.
        1번 항목	2번 항목	3번 항목	4번 항목
1번 상품	X	        O	     X	        O
2번 상품	O	        X	     X	        O
3번 상품	X	        X	     O	        X
4번 상품	X	        O	     O	        O
예를 들어 2번 상품은 1번, 4번 항목에 대해 보장해주며, 2번, 3번 항목은 보장해주지 않습니다. 위 예시의 경우 2번, 4번 상품에 동시에 가입하면 모든 항목에 대해서 보장받을 수 있습니다. 따라서 보험을 적어도 2개 가입해야 합니다.
상품별 보장 항목에 대한 내용이 문자열 형태로 들어있는 배열 table이 매개변수로 주어질 때, 모든 항목을 보장받으려면 보험을 최소한 몇 개 가입해야 하는지 return 하도록 solution 함수를 완성해주세요.
제한사항
table의 길이는 1 이상 8 이하입니다.
table의 원소는 각 상품의 항목별 보장 내용이 'O', 'X' 형태로 들어있는 문자열입니다.
각 문자열의 길이는 1 이상 8 이하입니다.
문자열은 'O'와 'X'로만 이루어져 있습니다.
'O'는 해당 항목에 대해 보장함을 나타내며, 'X'는 보장하지 않음을 나타냅니다.
모든 문자열의 길이는 같습니다.
모든 항목을 보장받도록 상품을 선택하는 방법이 항상 존재하는 경우만 입력으로 주어집니다.
입출력 예
table	                            result
["XOXO", "OXXO", "XXOX", "XOOO"]	2
["OXXO", "XOXO", "XXOO"]	        3
["OXOXO", "OOOOO", "XOXOX"]	        1
입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.
입출력 예 #2
모든 상품에 가입해야 모든 항목을 보장받을 수 있습니다.
입출력 예 #3
두 번째 상품에만 가입하면 모든 항목을 보장받을 수 있습니다.
*/
function solution(table) {
  let answer = 0;
  const tables = table.map((e) => e.split(""));
  let temp1 = {};
  const outArr = [];
  const search = (array, n, eachElements, outArr) => {
    if (array.length === n) {
      outArr.push(JSON.parse(JSON.stringify(array)));
      return;
    }
    for (const el of eachElements) {
      array.push(el);
      search(array, n, eachElements, outArr);
      array.pop();
    }
  };
  for (let i = 1; i < tables.length + 1; i++) {
    search([], i, table, outArr);
  }
  for (let j = 0; j < outArr.length; j++) {
    for (let i = 0; i < outArr[j].length; i++) {
      console.log(j, i, outArr[j][i]);
      let cnt = 1;
      for (const el of outArr[j][i]) {
        if (el === "O") {
          temp1[cnt] = true;
        }
        cnt++;
      }
      for (let k = 0; k < outArr[j][i].length; k++) {
        if (temp1[k] !== true) {
          continue;
        }
        if (k === 5) {
          answer++;
        }
      }
    }
  }
  console.log(temp1);
}

solution(["OXOXO", "OOOOO", "XOXOX"]);
