const DailySort = require("daily-sort");
module.exports = (req, res) => {
  res.setHeader("content-type", "text/plain");
  console.log(req)
  const list = DailySort.shuffle(["John", "Jim", "Bob", "Sally", "Jack"]);
  res.send(`${list}`);
};
