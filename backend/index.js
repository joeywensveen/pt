const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const { useParams } = require("react-router-dom")
const { useRef } = require("react")
const bcrypt = require("bcrypt")
const saltRounds = 10

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

app.put("/register", (req, res) => {

    const email = req.body.gebruikersnaam
    const newPassword = req.body.wachtwoord
    console.log(email, newPassword)
    const query = `UPDATE gebruikers SET wachtwoord = ? WHERE email = ?`

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(newPassword, salt, function (err, hash) {
            db.query(query, [hash, email], (err, result) => {
                if (err) {
                    // Handle the error
                    res.status(500).send("Error updating password");
                } else {
                    // Send a success response
                    res.send("Password updated successfully");
                }
            })

        });
    });


})

app.listen(3000, () => console.log("listening"))