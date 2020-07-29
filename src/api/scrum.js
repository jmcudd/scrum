const { shuffle } = require("daily-sort");
module.exports = (req, res) => {
  res.setHeader("content-type", "text/plain");
  const list = shuffle(["John", "Jim", "Bob", "Sally", "Jack"]);
  res.send(`${list}`);
};
