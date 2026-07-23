const express = require('express');
const {handleBookStoreController, handleBookListController, handleDeleteBookController, handleUpdateBookController} = require('../controller/book.controller');


const router = express.Router();


//http://localhost:3000/book/addbook
router.post('/addbook',handleBookStoreController);
router.get('/booklist',handleBookListController);
router.delete('/deletebook',handleDeleteBookController);
router.put('/updatebook',handleUpdateBookController);

module.exports = router;