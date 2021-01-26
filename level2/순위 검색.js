function solution(info, query) {
  const table = [];
  let answer = [];

  const getFilterApplicantLength = (lang, job, carrer, favorite, score) => {
    let temp = table.slice();
    if (lang !== "-") temp = temp.filter((e) => e[0] === lang);
    if (job !== "-") temp = temp.filter((e) => e[1] === job);
    if (carrer !== "-") temp = temp.filter((e) => e[2] === carrer);
    if (favorite !== "-") temp = temp.filter((e) => e[3] === favorite);
    if (score !== "-") temp = temp.filter((e) => e[4] >= Number(score));
    return temp.length;
  };

  info.forEach((e) => table.push(e.split(" ")));
  query.forEach((e) => {
    const [lang, job, carrer, dump] = e.split(" and ");
    const [favorite, score] = dump.split(" ");
    const result = getFilterApplicantLength(lang, job, carrer, favorite, score);

    answer.push(result);
  });
  console.log(answer);
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
