const users = [
  {
    name: "roto",
    type: "human",
  },
  {
    name: "nana",
    type: "cat",
  },
  {
    name: "chai",
    type: "cat",
  },
];

console.log(
  users
    .filter(({ type }) => type === "cat")
    .map(({ name }) => name)
    .join(" ")
);
