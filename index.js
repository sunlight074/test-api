const express = require("express");
const app = express();

var port = process.env.PORT || 3000;

app.use(express.json());

app.post("/event/log", function (req, res) {
  console.log("req => ", req.body);
  res.send("ok");
});

app.listen(port, function () {
  console.log("Starting node.js on port " + port);
});
