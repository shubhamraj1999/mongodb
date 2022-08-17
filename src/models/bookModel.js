const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    BookName: String,
    prices: {
        indianPrice: Number,
        europePrice: Number,
    },
    Year: { type: Number, default: 2021 },
    tags: [String],
    AuthorName: String,
    TotalPages: Number,
    StockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
