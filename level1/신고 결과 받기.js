const isDuplicated = (arr, key) => arr.includes(key);

function solution(id_list, reports, k) {
  const countSentMail = (id) => {
    if (!reporterCnt[id]) return 0;
    return reporterCnt[id]
      .map((reported) => reportedCnt[reported] >= k)
      .reduce((a, b) => a + b, 0);
  };
  const reporterCnt = {};
  const reportedCnt = {};

  reports
    .map((report) => report.split(" "))
    .forEach(([reporter, reported]) => {
      if (!reportedCnt[reported]) reportedCnt[reported] = 0;
      if (!reporterCnt[reporter]) {
        reportedCnt[reported]++;
        return (reporterCnt[reporter] = [reported]);
      }
      if (isDuplicated(reporterCnt[reporter], reported)) return;
      reportedCnt[reported]++;
      reporterCnt[reporter].push(reported);
    });

  return id_list.map(countSentMail);
}
