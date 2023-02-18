function solution(cards1 = [], cards2 = [], goals = []) {
  const result = goals.map((goal) => {
    if (cards1[0] === goal) {
      cards1.shift();
      return true;
    }
    if (cards2[0] === goal) {
      cards2.shift();
      return true;
    }
    return false;
  });
  return result.filter(Boolean).length === goals.length ? "Yes" : "No";
}

solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);

solution(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
