class DefaultCtrl{
    home(req,res){
        res.status(200);
        res.send('Express API Moiz')
    };

    health(req,res){
        console.log(req.id,"id");
        res.status(200);
        res.json({status:'Up'})
    }
}

module.exports=new DefaultCtrl();