const { count } = require("console")
const BookModel= require("../models/bookModel")
const authormodel = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData = async function(req, res){
    let authors = await authorModel.find({author_name : "chetan Bhagat"})
    let bookId = await bookModel.find({author_id :{ $eq : authors[0].author_id}})
    res.send({msg : bookId})
}

const findAuthor = async function(req , res){
    let bookPrice = await bookModel.findOneAndUpdate(
        {name : "two states"},
        {price : 100},
        {new : true} // , upsert : true
    )
    let updatePrice = bookPrice.price
    let authorUpdate = await authorModel.find({author_id : {$eq : bookPrice.author_id}}).select ({author_name : 1 , _id : 0})
    res.send({msg :  authorUpdate , updatePrice})
}

const findBooks = async function(req , res){
    let allBooks = await bookModel.find({price : { $gte : 50 , $lte : 100}})
    let aut = allBooks.map(i => i.author_id)
    let updatedBook = await authorModel.find({author_id : aut}).select({author_name : 1 , _id : 0})
    res.send({msg : updatedBook})
}




// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.createAuthor=createAuthor
module.exports.getBooksData = getBooksData
module.exports.findAuthor = findAuthor
module.exports.findBooks = findBooks

// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
