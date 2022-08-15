const userModel = require("../models/userModel")
const UserModel = require("../models/userModel")

const createUser = async function (req, res) {
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({ msg: savedData })
}

const getUsersData = async function (req, res) {
    let allUsers = await UserModel.find()
    res.send({ msg: allUsers })
}

const createBook = async function (req, res) {
    let data = req.body
    let bookData = await userModel.create(data)
    res.send({ msg: bookData })
}

const getBook = async function (req, res) {
    let allData = await userModel.find()
    res.send({ msg: allData })
}





module.exports.createUser = createUser
module.exports.getUsersData = getUsersData
module.exports.createBook = createBook
module.exports.getBook = getBook