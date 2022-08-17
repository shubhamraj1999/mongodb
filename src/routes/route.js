const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)
// 1
router.post("/createBook", BookController.createBook  )
// 2
router.get("/booksData", BookController.booksData)
// 3
router.post("/getBooksInYear", BookController.getBooksInYear)
// 4
router.post("/getparticularBOoks", BookController.getparticularBOoks)
// 5
router.get("/getXINRBooks", BookController.getXINRBooks)
// 6
router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;