function solution(jobs) {
  const jobLength = jobs.length;
  jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log(jobs);
  const queue = [];
  let finishedTime = jobs[0][0];
  let totalWaitedTime = jobs[0][0] + jobs[0][1];
  while (jobs.length !== 0) {
    let currentTask = jobs.shift();
    queue.push(currentTask);
    finishedTime += currentTask[1];
    totalWaitedTime += finishedTime - currentTask[0];
    console.log(currentTask);
    console.log(totalWaitedTime);
    let temp = jobs.filter((e) => e[0] <= finishedTime);
    if (temp.length === 0) {
      finishedTime++;
      continue;
    }
    temp.sort((a, b) => a[1] - b[1]);
    jobs.splice(0, temp.length, ...temp);
  }
}

solution([
  [0, 3],
  [1, 9],
  [2, 6],
  [4, 3],
]);

//[[0, 3], [1, 9], [2, 6], [4, 3]] 9
