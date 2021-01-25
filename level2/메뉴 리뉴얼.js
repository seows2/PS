function solution(orders, course) {
  let objArr = [];
  let answer = [];

  function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);
      results.push(...attached);
    });
    return results;
  }

  for (const order of orders) {
    for (const num of course) {
      let obj = objArr[num] ? objArr[num] : {};
      const results = getCombinations([...order], num);
      for (let result of results) {
        result = result.sort().join("");
        obj[result] = obj[result] ? obj[result] + 1 : 1;
      }
      objArr[num] = obj;
    }
  }
  //console.log(objArr);
  for (const obj of objArr) {
    if (!obj) continue;
    const max = Math.max(...Object.values(obj));
    if (max <= 1) continue;
    const selected = Object.entries(obj)
      .filter(([_, value]) => {
        if (value === max) return true;
      })
      .map(([key, _]) => key);
    answer = answer.concat(...selected);
  }
  //console.log(answer.sort());

  return answer.sort();
}

solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);
