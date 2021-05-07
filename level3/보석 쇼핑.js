function solution(gems) {
  const gemsCount = gems.length;
  const gemTypes = new Set(gems);
  const gemTypesCount = gemTypes.size;

  if (gemTypesCount == 1) return [1, 1];
  if (gemTypesCount == gemsCount) return [1, gemsCount];

  const distance = [1, gemsCount];
  const types = new Map();

  let leftPosition = 0;
  let rightPosition = -1;

  let command = 1;

  while (true) {
    if (command == 0) {
      if (types.get(gems[leftPosition]) > 1)
        types.set(gems[leftPosition], types.get(gems[leftPosition]) - 1);
      else types.delete(gems[leftPosition]);

      ++leftPosition;
    } else {
      ++rightPosition;

      if (!types.get(gems[rightPosition])) types.set(gems[rightPosition], 1);
      else types.set(gems[rightPosition], types.get(gems[rightPosition]) + 1);
    }

    if (types.size === gemTypesCount) {
      if (distance[1] - distance[0] > rightPosition - leftPosition) {
        distance[0] = leftPosition + 1;
        distance[1] = rightPosition + 1;
      }

      if (leftPosition + 1 >= gems.length) break;
      else command = 0;
    } else {
      if (rightPosition + 1 >= gems.length) break;
      else command = 1;
    }
  }
  console.log(distance);

  return distance;
}

function solution2(gems) {
  const kinds = new Set(gems).size;
  const gemMap = new Map();
  let gemLength = [];
  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    console.log(gemMap, i);
    if (gemMap.size === kinds) {
      console.log("1231312");
      gemLength.push([gemMap.values().next().value + 1, i + 1]);
    }
  });
  console.log(gemLength);
  gemLength.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) {
      return a[1] - b[1];
    }
    return a[1] - a[0] - (b[1] - b[0]);
  });
  return gemLength[0];
}

solution2(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]);
