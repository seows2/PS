function solution2(info, query) {
  const table = [];
  let answer = [];

  const getFilterApplicantLength = (
    table,
    lang,
    job,
    carrer,
    favorite,
    score
  ) => {
    if (lang !== "-") table = table.filter((e) => e[0] === lang);
    if (job !== "-") table = table.filter((e) => e[1] === job);
    if (carrer !== "-") table = table.filter((e) => e[2] === carrer);
    if (favorite !== "-") table = table.filter((e) => e[3] === favorite);
    if (score !== "-") table = table.filter((e) => e[4] >= Number(score));
    return table.length;
  };

  info.forEach((e) => table.push(e.split(" ")));
  query.forEach((e) => {
    const [lang, job, carrer, dump] = e.split(" and ");
    const [favorite, score] = dump.split(" ");
    const result = getFilterApplicantLength(
      table,
      lang,
      job,
      carrer,
      favorite,
      score
    );

    answer.push(result);
  });
  console.log(answer);
  return answer;
}

function solution(info, query) {
  const obj = {};
  const answer = [];
  const infoLength = info.length;
  const queryLength = query.length;
  let flag = true;
  const pushObj = (str, score) => {
    if (obj[str]) obj[str].push(score);
    else obj[str] = [score];
  };
  const oneDash = (i, temp, score) => {
    temp.splice(i, 1, "-");
    pushObj(temp.join(""), score);
  };
  const oneWord = (i, temp, arr, score) => {
    temp.splice(i, 1, arr[i]);
    pushObj(temp.join(""), score);
  };
  const twoDash = (j, temp, score, arr) => {
    temp.splice(j, 1, "-");
    if (!flag) temp.splice(j - 1, 1, arr[j - 1]);
    flag = false;
    pushObj(temp.join(""), score);
  };
  for (let i = 0; i < infoLength; i++) {
    const arr = info[i].split(" ");
    const score = Number(arr.pop());
    const str = arr.join("");
    pushObj(str, score);
    pushObj("----", score);
    for (let i = 0; i < 4; i++) {
      const temp = arr.slice();
      flag = true;
      oneDash(i, temp, score);
      oneWord(i, ["-", "-", "-", "-"], arr, score);
      for (let j = i + 1; j < 4; j++) {
        twoDash(j, temp, score, arr, flag);
      }
    }
  }
  Object.values(obj).forEach((e) => {
    e.sort((a, b) => a - b);
  });

  const lowerBound = (arr, value) => {
    const arrL = arr.length;
    let low = 0;
    let high = arr.length;
    while (low < high) {
      const mid = Math.floor(low + (high - low) / 2);
      if (value <= arr[mid]) high = mid;
      else low = mid + 1;
    }
    return arrL - low;
  };
  for (let j = 0; j < queryLength; j++) {
    const [lang, job, carrer, dump] = query[j].split(" and ");
    const [food, score] = dump.split(" ");
    const str = lang + job + carrer + food;
    let ans = 0;
    if (obj[str]) ans = lowerBound(obj[str], score);
    answer.push(ans);
  }

  return answer;
}

solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ]
);
