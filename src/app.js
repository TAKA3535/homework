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
  host: 'localhost2',
  port: 3306,
  user: 'morita',
  password: 'password',
  database: 'homework_database',
});

//ブラウザ上とTarendの表示test
// app.get("/api/test", (req, res, next) => {
//   res.send("表示test");
// });

// jsonが返ってくるapi
// app.get("/api/res", (req, res, next) => {
//   res.json({
//     morita1: "mysql",
//     morita2: "postgres",
//     morita3: "oracle"
//   })
// });

// homework.todosすべてを取得する
app.get("/api/morita", (req, res, next) => {
  const sql = 'select * from homework.todos';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// homework.todos1件を作成する
app.post("/api/morita", (req, res, next) => {
  const todo = req.body;
  const sql = 'insert into homework.todos set ?';
  connection.query(sql, todo, (err, result) => {
    if (err) throw err;
    res.status(201).json(result.id);
  });
});

// homework.todos1件を取得する
app.get("/api/morita/:id", (req, res, next) => {
  const id = req.params.id;
  const sql = 'select * from homework.todos where ?';
  connection.query(sql, { id: id }, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// homework.todos1件を更新する
app.put("/api/morita/:id", (req, res, next) => {
  const id = req.params.id;
  const todo = req.body;
  const sql = 'update homework.todos set ? where ?';
  connection.query(sql, [todo, { id: id }], (err, result) => {
    if (err) throw err;
    res.status(200).send();
  });
});

// thomework.todos件を削除する
app.delete("/api/morita/:id", (req, res, next) => {
  const id = req.params.id;
  const sql = 'delete from homework.todos where ?';
  connection.query(sql, { id: id }, (err, result) => {
    if (err) throw err;
    res.status(200).send();
  });
});