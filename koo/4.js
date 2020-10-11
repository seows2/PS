/* 문제 설명

쿠팡의 배송기사인 민수는 출발지에서 트럭을 몰고 출발하여, 물류센터에서 물건을 싣고 배송지까지 운송합니다. 도시 사이의 도로 정보가 주어졌을 때, 출발지에서 물류센터를 거쳐서 배송지까지 도달하는 경로가 총 몇 개인지 알아보고자 합니다.
P1_.png
만약 위의 그림에서 출발지가 SEOUL, 물류센터가 DAEGU, 배송지가 YEOSU라고 한다면, 총 9개의 경로가 존재합니다.
SEOUL → DAEJEON → DAEGU → BUSAN → YEOSU
SEOUL → DAEJEON → DAEGU → GWANGJU → YEOSU
SEOUL → DAEJEON → DAEGU → GWANGJU → BUSAN → YEOSU
SEOUL → DAEJEON → ULSAN → DAEGU → BUSAN → YEOSU
SEOUL → DAEJEON → ULSAN → DAEGU → GWANGJU → YEOSU
SEOUL → DAEJEON → ULSAN → DAEGU → GWANGJU → BUSAN → YEOSU
SEOUL → ULSAN → DAEGU → BUSAN → YEOSU
SEOUL → ULSAN → DAEGU → GWANGJU → YEOSU
SEOUL → ULSAN → DAEGU → GWANGJU → BUSAN → YEOSU
출발지를 나타내는 depar, 물류센터를 나타내는 hub, 배송지를 나타내는 dest, 도시 사이의 도로 정보를 나타내는 roads가 매개변수로 주어집니다. 이때, 출발지에서 물류센터를 거쳐서 배송지에 도달하는 경로의 개수를 10007로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요. (경로의 개수가 10010개라면, 3을 return 하면 됩니다.)
제한사항
depar, hub, dest는 각각 길이 1 이상 10 이하인 문자열입니다.
depar, hub, dest는 알파벳 대문자로 구성되어 있습니다.
depar, hub, dest는 서로 다릅니다.
도로의 연결 상태는 나타내는 roads는 2차원 문자열 배열입니다.
roads의 길이(=도로의 수)는 1 이상 100,000 이하입니다.
각 행은 [S1, S2] 형태로 2개의 문자열을 담고 있습니다.
S1에서 S2로 갈 수 있는 단방향 도로가 있다는 의미입니다. S2에서 S1로 갈 수 있다는 것을 의미하지는 않습니다.
S1, S2는 알파벳 대문자로만 구성된 길이 1 이상 10 이하인 서로 다른 문자열입니다.
한 도시에서 다른 도시로 갈 수 있는 도로는 최대 1개입니다. 즉, 중복된 도로 정보는 입력으로 주어지지 않습니다.
임의의 도시에서 출발해서 다시 출발한 도시로 돌아올 수 있는 경로(사이클)는 입력으로 주어지지 않습니다.
depar, hub, dest, roads에서 나타날 수 있는 서로 다른 도시의 개수는 3 이상 10,000 이하입니다.
depar에서 hub를 경유하여 dest로 갈 수 있는 경로가 없으면, 0을 return 해주세요.
입출력 예
depar	hub	dest	roads	result
"SEOUL"	"DAEGU"	"YEOSU"	[["ULSAN","BUSAN"],["DAEJEON","ULSAN"],["DAEJEON","GWANGJU"],["SEOUL","DAEJEON"],["SEOUL","ULSAN"],["DAEJEON","DAEGU"],["GWANGJU","BUSAN"],["DAEGU","GWANGJU"],["DAEGU","BUSAN"],["ULSAN","DAEGU"],["GWANGJU","YEOSU"],["BUSAN","YEOSU"]]	9
"ULSAN"	"SEOUL"	"BUSAN"	[["SEOUL","DAEJEON"],["ULSAN","BUSAN"],["DAEJEON","ULSAN"],["DAEJEON","GWANGJU"],["SEOUL","ULSAN"],["DAEJEON","BUSAN"],["GWANGJU","BUSAN"]]	0
입출력 예 설명
입출력 예 #1
문제 예시와 같습니다.
입출력 예 #2
P2_.png
ULSAN에서 SEOUL을 경유하여 BUSAN으로 가는 경로는 없으므로, 0을 return 해야 합니다. */

function solution(depar, hub, dest, roads) {
  let answer = [];
  let visited = [];

  const dfs = (roads, temp, currentPlace) => {
    if (roads[currentPlace][1] === dest) {
      temp.push(dest);
      const temp1 = temp.slice();
      answer.push(temp1);
      temp.pop(roads[currentPlace][1]);
      return;
    }
    for (let i = 0; i < roads.length; i++) {
      if (!visited[i] && roads[currentPlace][1] === roads[i][0]) {
        visited[i] = true;
        temp.push(roads[i][0]);
        dfs(roads, temp, i);
        visited[i] = false;
        temp.pop();
      }
    }
  };

  for (let i = 0; i < roads.length; i++) {
    let temp = [];
    //console.log(roads[i]);
    if (roads[i][0] !== depar) continue;
    visited[i] = true;
    temp.push(roads[i][0]);
    dfs(roads, temp, i);
    visited[i] = false;
    temp.pop();
  }
  console.log(answer);

  let ans = 0;
  answer.forEach((el) => {
    if (el.includes(hub)) {
      ans++;
    }
  });
  console.log(ans);
  return ans;
}

solution("SEOUL", "DAEGU", "YEOSU", [
  ["ULSAN", "BUSAN"],
  ["DAEJEON", "ULSAN"],
  ["DAEJEON", "GWANGJU"],
  ["SEOUL", "DAEJEON"],
  ["SEOUL", "ULSAN"],
  ["DAEJEON", "DAEGU"],
  ["GWANGJU", "BUSAN"],
  ["DAEGU", "GWANGJU"],
  ["DAEGU", "BUSAN"],
  ["ULSAN", "DAEGU"],
  ["GWANGJU", "YEOSU"],
  ["BUSAN", "YEOSU"],
]);
