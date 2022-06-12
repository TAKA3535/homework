const express = require("express");
const app = express();
const cors = require("cors");
const mysql2 = require('mysql2');

// port 3000でサーバ立ち上げ
const server = app.listen(3000, function () {
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
app.get("/api/test", (req, res, next) => {
  res.send("表示test2");
});

// jsonが返ってくるapi
// app.get("/api/res", (req, res, next) => {
//   res.json({
//     morita1: "mysql",
//     morita2: "postgres",
//     morita3: "oracle"
//   })
// });

//
connection.connect((err) => {
  if (err) throw err;
  console.log('connected mysql');
});

// homework_tableすべてを取得する
app.get("/api/morita", (req, res, next) => {
  const sql = 'select * from homework_table';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// homework_table1件を作成する
app.post("/api/morita", (req, res, next) => {
  const todo = req.body;
  const sql = 'insert into homework_table set ?';
  connection.query(sql, todo, (err, result) => {
    if (err) throw err;
    res.status(201).json(result.id);
  });
});

// homework_table1件を取得する
app.get("/api/morita/:id", (req, res, next) => {
  const id = req.params.id;
  const sql = 'select * from homework_table where ?';
  connection.query(sql, { id: id }, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// homework_table1件を更新する
app.put("/api/morita/:id", (req, res, next) => {
  const id = req.params.id;
  const todo = req.body;
  const sql = 'update homework_table set ? where ?';
  connection.query(sql, [todo, { id: id }], (err, result) => {
    if (err) throw err;
    res.status(200).send();
  });
});

// homework_table1件を削除する
app.delete("/api/morita/:id", (req, res, next) => {
  const id = req.params.id;
  const sql = 'delete from homework_table where ?';
  connection.query(sql, { id: id }, (err, result) => {
    if (err) throw err;
    res.status(200).send();
  });
});