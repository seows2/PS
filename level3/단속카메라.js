function solution(routes) {
  let sortedRoutes = routes.sort((a, b) => a[1] - b[1]);
  let answer = 0;
  while (sortedRoutes.length !== 0) {
    const camPosition = sortedRoutes[0][1];
    sortedRoutes = sortedRoutes.filter(([start, end]) => {
      if (start <= camPosition && camPosition <= end) return false;
      else return true;
    });
    answer++;
  }
  //console.log(answer);
  return answer;
}

solution([
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]);
