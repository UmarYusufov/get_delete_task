const mysql = require("mysql2");
const express = require("express");
const app = express()
const port = 3000

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "practice",
    password: ""
});

app.get("/group_tasks", function (req, res) {
    pool.query("SELECT * FROM group_tasks", function (err, data) {
        if (err) return console.log(err);
        res.json({
            group_tasks: data
        });
    });
});

app.get("/groups", function (req, res) {
    pool.query("SELECT * FROM groups", function (err, data) {
        if (err) return console.log(err);
        res.json({
            groups: data
        });
    });
});

app.get("/solution", function (req, res) {
    pool.query("SELECT * FROM solution", function (err, data) {
        if (err) return console.log(err);
        res.json({
            solution: data
        });
    });
});

app.get("/students", function (req, res) {
    pool.query("SELECT * FROM students", function (err, data) {
        if (err) return console.log(err);
        res.json({
            students: data
        });
    });
});

app.get("/sub_tasks", function (req, res) {
    pool.query("SELECT * FROM sub_tasks", function (err, data) {
        if (err) return console.log(err);
        res.json({
            sub_tasks: data
        });
    });
});

app.get("/tasks", function (req, res) {
    pool.query("SELECT * FROM tasks", function (err, data) {
        if (err) return console.log(err);
        res.json({
            tasks: data
        });
    });
});

app.delete("/tasks/:id", function (req, res) {
    pool.query("DELETE FROM `tasks` WHERE `id`=" + req.params.id, function (err, data) {
        if (err) return console.log(err);
        res.json({
            tasks: data
        });
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})