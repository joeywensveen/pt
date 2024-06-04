const express = require("express")
const cors = require("cors")
const mysql = require("mysql")


const app = express()
app.use(express.json())
app.use(cors())

var hostname = "x24.h.filess.io"
var database = "kenamjuplanner_dailytold"
var port = "3307"
var username = "kenamjuplanner_dailytold"
var password = "1297856520bb7536ee9325efa1bd335eae9e08cc"
var tablename = "trainingen"

var db = mysql.createConnection({
    host: hostname,
    user: username,
    password,
    database,
    port,
})

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/:trainer", (req, res) => {
    db.query(`SELECT * FROM ${tablename} WHERE trainer = "${"Joey Wensveen"}"`, (err, data) => {
        if (err) return res.json(err)
        const result = data
        res.json(result)
    })
})

app.listen(3000, () => console.log("listening"))