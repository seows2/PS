function solution(info, query) {
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

function solution2(info, query) {
  const javaTable = [];
  const pythonTable = [];
  const cppTable = [];

  info.forEach((e) => {
    const [language, position, carrer, fav, score] = e.split(" ");
  });
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
