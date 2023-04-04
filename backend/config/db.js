const mongoose = require("mongoose");
const db = "mongodb+srv://sujitgda997:FGem9HyY4uEeTq9H@cluster0.idyg4on.mongodb.net/mydata?retryWrites=true&w=majority"; 

const connectDB = async() =>{
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(db,{
            useNewUrlParser: true,
            
        })
    }
    catch (err){
        console.error(err.message)
        process.exit(1);
    }
}

module.exports = connectDB;