const express=require('express')
const bookCtrl=require('../controllers/bookCtrl')
const router=express.Router();

router.get('/',bookCtrl.books)
router.get('/:id',bookCtrl.getById)
module.exports=router;