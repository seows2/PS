function solution(scores = []) {
  const [myWorkScore, myColleageScore] = scores[0];

  const sortedScores = scores.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]
  );
  let maxColleageScore = 0;
  let answer = 1;

  for (const [workScore, colleageScore] of sortedScores) {
    if (colleageScore < maxColleageScore) {
      if (myColleageScore === colleageScore && myWorkScore === workScore) {
        return -1;
      }
    } else {
      maxColleageScore = Math.max(maxColleageScore, colleageScore);
      if (workScore + colleageScore > myWorkScore + myColleageScore) {
        answer++;
      }
    }
  }
  return answer;
}
