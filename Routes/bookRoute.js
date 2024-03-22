const express=require('express')
const bookCtrl=require('../controllers/bookCtrl')
const router=express.Router();

router.get('/',bookCtrl.books)
router.get('/:id',bookCtrl.getById)
router.get('/authors',bookCtrl.authors);
router.post('/',bookCtrl.post)
router.delete('/:id',bookCtrl.remove)
module.exports=router;