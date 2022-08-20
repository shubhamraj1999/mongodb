const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "myAuthor",
        required : true
    }, 
    price: Number,
    ratings: Number,
    publisher : {
        type : ObjectId,
        ref : "myPublisher",
        required : true
    },
    isHardCover: {
     type : Boolean,
     default : false}


}, { timestamps: true });


module.exports = mongoose.model('myBook', bookSchema)
