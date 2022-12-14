const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

const bookschema = new mongoose.schema({

    bookName: String,
   
    authorName: String,
   
    category: String,
   
    year: number
}, 
{ timestamps: true })





module.exports = mongoose.model('User', userSchema) //users
module.exports = mongoose.model('Book', bookschema)


// String, Number
// Boolean, Object/json, array