const express=require('express')
const bookCtrl=require('../controllers/bookCtrl')
const router=express.Router();

router.get('/books',bookCtrl.books)

module.exports=router;