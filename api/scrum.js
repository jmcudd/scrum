const DailySort = require("daily-sort");
module.exports = (req, res) => {
  res.setHeader("content-type", "application/json");
  console.log(req.body);
  const list = DailySort.shuffle(req.body.text.split(" "));
  let output = "";
  list.forEach((name, i) => {
    output += `${i + 1}. ${name}\n`;
  });
  res.send({
    response_type: "in_channel",
    text: output
  });
};
