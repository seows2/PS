/*
[3] 이번 주에는 지은이가 한학기 내내 연습하며 준비해 온 K-POP (Kyonggi-pop) Dancing Contest 가 있다.
이 댄스 경연대회에서는 총 n 개의 음악을 주어진 순서대로 틀어주며 각 참가자는 자유롭게 춤을 추게 된다.
지은이는 그 n개의 음악을 모두 알고 있으며, 심판들에 대한 정보와 자신의 춤 실력도 말도 안 될 정도로 너무나 잘 파악하고 있다.
그래서 i번째 음악에 맞춰 지은이가 춤을 출 경우 정확히 Score[i]만큼의 점수를 얻게 된다는 것을 알고 있다.
다만, i번째 음악에 춤을 출 경우 체력적으로 힘들기 때문에 Wait[i]개 만큼의 다음 음악에는 춤을 출 수 없게 된다
(즉,i번째 음악에 춤을 추면 i+1번째에서 i+Wait[i] 번째 음악까지는 춤을 출 수 없다.
    만약 Wait[i]=0이면 쉼 없이 i+1번째 음악에 춤을 출 수 있다.)
이 대회에서는 마지막 n 번째 음악까지 튼 후에, 제일 높은 점수를 얻은 댄서가 우승하게 된다.
지은이는 자신이 얻을 수 있는 최고 점수를 따고 싶다.
당신은 전공을 살려 지은이를 도와줄 수 있는 프로그램을 만들어 보기로 했다.
이 문제에서는 두 개의 배열 Score[1..n]와 Wait[1..n]이 입력으로 주어지며,
각 Score[i], Wait[i]는 0 이상의 정수로 주어진다고 가정하라.
지은이가 얻을 수 있는 최고점수를 계산하는 효율적인 알고리즘을 기술하고 분석하시오.
*/

const solution = (Score, Wait) => {
  let dances = [];
  //dances 객체 초기화
  Score.forEach((e, i) => {
    dances.push({
      start: i + 1,
      finish: i + 1 + Wait[i],
      score: e,
    });
  });
  //dances 객체배열 finish 오름차순 정렬
  dances.sort((a, b) => a["finish"] - b["finish"]);
  //dp배열 선언, 초기값 넣기
  let dp = [];
  dp[0] = dances[0].score;

  //dances 배열 순회
  dances.forEach((e, i) => {
    if (i == 0) return;
    const { score } = e;
    let tempScore = score;
    //이진탐색
    const index = binarySearch(dances, i);
    if (index !== false) {
      tempScore += dp[index];
    }
    //dp 최대값 저장
    dp[i] = Math.max(tempScore, dp[i - 1]);
  });
  console.log(dp);

  return dp[dances.length - 1];
};

const binarySearch = (dances, index) => {
  let first = 0;
  let last = index - 1;

  while (first <= last) {
    const mid = Math.floor((first + last) / 2);
    console.log(
      first,
      last,
      mid,
      "\n",
      dances[mid],
      "\n",
      dances[mid + 1],
      "\n",
      dances[index]
    );

    if (dances[mid].finish <= dances[index].start) {
      console.log("첫번 째 if 통과");
      if (dances[mid + 1].finish <= dances[index].start) {
        console.log("first = mid + 1");
        first = mid + 1;
      } else {
        console.log("return mid;");
        return mid;
      }
    } else {
      console.log("last = mid - 1");

      last = mid - 1;
    }
  }
  return false;
};

console.log(solution([1, 2, 3, 4, 5], [3, 4, 4, 4, 4]));
