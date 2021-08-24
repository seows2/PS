function solution(table, languages, preference) {
  const scoreTables = table.map((e) => e.split(" "));
  const scores = [];

  for (const scoreTable of scoreTables) {
    let score = 0;
    for (const [index, language] of Object.entries(languages)) {
      const idx = scoreTable.indexOf(language);
      if (idx === -1) continue;

      score += preference[index] * (6 - idx);
    }
    scores.push(score);
  }
  return scores
    .map((score, idx) => (score === Math.max(...scores) ? idx : -1))
    .filter((idx) => idx !== -1)
    .map((idx) => scoreTables[idx][0])
    .sort()[0];
}

solution(
  [
    "SI JAVA JAVASCRIPT SQL PYTHON C#",
    "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
    "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
    "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
    "GAME C++ C# JAVASCRIPT C JAVA",
  ],
  ["PYTHON", "C++", "SQL"],
  [7, 5, 5]
);
