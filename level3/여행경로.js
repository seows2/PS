function solution(tickets) {
  const DEPART = "ICN";
  const TICKET_LENGTH = tickets.length;

  let visited = [];
  let answer = [];

  const dfs = (temp, currentPlace) => {
    if (temp.length === TICKET_LENGTH) {
      temp.push(tickets[currentPlace][1]);
      answer.push(temp.slice());
      temp.pop();
      return;
    }
    for (let i = 0; i < TICKET_LENGTH; i++) {
      if (!visited[i] && tickets[currentPlace][1] === tickets[i][0]) {
        visited[i] = true;
        temp.push(tickets[i][0]);
        dfs(temp, i);
        visited[i] = false;
        temp.pop();
      }
    }
  };

  for (let i = 0; i < TICKET_LENGTH; i++) {
    let temp = [];
    if (tickets[i][0] !== DEPART) continue;
    visited[i] = true;
    temp.push(tickets[i][0]);
    dfs(temp, i);
    temp.pop();
    visited[i] = false;
  }

  answer.sort();
  return answer[0];
}

solution([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);
