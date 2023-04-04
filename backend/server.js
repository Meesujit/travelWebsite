const express = require("express")
const connectDB = require("./config/db")
const routes = require("./routes/api/records")
const cors = require("cors")

const app = express()

connectDB().then(() => {
    console.log("Connected to mongodb")
});

app.use(cors({
    origin:true,
    credentials: true
}))

app.use(express.json({
    extended: false
}))

// app.get('/', (req,res) => res.send('hello world'));
app.use("/api/records", routes)


require("dotenv").config({path:"./config.env" }) 
const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`Server running on port ${port}`));

