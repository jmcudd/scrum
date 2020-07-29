const DailySort = require("daily-sort");
module.exports = (req, res) => {
  res.setHeader("content-type", "text/plain");
  console.log(req.body);
  const list = DailySort.shuffle(req.body.text.split(" "));
  let output = "";
  list.forEach((name, i) => {
    output += `${i}. ${name}\n`;
  });
  res.send(output);
};
