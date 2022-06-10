const express = require("express");
const app = express();
const cors = require("cors")
const mysql2 = require('mysql2')

// port 5000でサーバ立ち上げ
const server = app.listen(5000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

//cors実行
app.disable('x-powered-by');
app.use(cors()).use(express.json());

// mysqlに接続
const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'morita',
  password: 'password',
  database: 'homework_database',
});

//ブラウザ上とTarendの表示test
// app.get("/api/morita", (req, res, next) => {
//   res.send("表示test");
// });

// jsonが返ってくるapi
app.get("/api/res", (req, res, next) => {
  res.json({
    morita1: "mysql",
    morita2: "postgres",
    morita3: "oracle"
  })
});