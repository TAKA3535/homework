const express = require("express");
const app = express();

// port 5000でサーバ立ち上げ
const server = app.listen(5000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

//ブラウザ上とTarendの表示test
app.get("/api/morita", (req, res, next) => {
  res.send("表示test");
});