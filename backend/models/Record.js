const mongoose = require(`mongoose`)

const RecordSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
         type: String,
         required: true
    },
    address: {
        type: String
    },
    beginDate: {
        type: Date,
        default: Date.now
    },
    arivelDate: {
        type: Date,
        default: Date.now
    },
    price: {
        type:Number,
        required: true
    }
})
module.exports = Record = mongoose.model(`record`,RecordSchema);