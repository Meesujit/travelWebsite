const mongoose = require("mongoose");
const db = "mongodb+srv://travelWebsiteBackend:R2ADdUSrB5JYfoE0@cluster0.0agfnzf.mongodb.net/data?retryWrites=true&w=majority"; 

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