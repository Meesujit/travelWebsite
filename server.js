const express = require("express")
const connectDB = require("./config/db")
const records = require("./routes/api/records")
const cors = require("cors")
const path = require('path')
require("dotenv").config({path:"./config.env" }) 

// connecting to DB
connectDB()

// Initiating App
const app = express()


// Handling Middileware
app.use(express.json())
app.use(cors())
app.use("/api/records", records)

// STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});


const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`Server running on port ${port}`));

