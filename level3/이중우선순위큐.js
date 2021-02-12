function solution(operations) {
  let queue = [];
  operations.forEach((operation) => {
    const [oper, num] = operation.split(" ");
    if (oper === "I") {
      queue.push(num);
      queue.sort((a, b) => a - b);
    } else if (queue.length === 0) {
      return;
    } else if (num === "-1") {
      queue.shift();
    } else if (num === "1") {
      queue.pop();
    }
  });

  return queue.length === 0
    ? [0, 0]
    : [Number(queue[queue.length - 1]), Number(queue[0])];
}

solution(["I 16", "D 1"]);
