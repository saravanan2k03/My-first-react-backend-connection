const express = require("express");
// const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const apiport = 5000;
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "saravanan",
});


app.post("/create", (req, res) => {
  const names = req.body.name; //
  const age = req.body.age; //
  const Country = req.body.country; //
  const position = req.body.position; //
  const salary = req.body.salary;

  db.query(
    "insert into saravanan.employees (name, age, country, position, salary)VALUES (?,?,?,?,?)",
    [names, age, Country, position, salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.get("/show", (req, res) => {
  db.query("select * from saravanan.employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(apiport, () => {
  console.log("Backend server is running" + " " + apiport);
});
