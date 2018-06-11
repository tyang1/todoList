const ToDo = require('../model/database.js');

const userController = {};
userController.createItem = (req,res,next) =>{
    console.log("create Item is in process");
    ToDo.create({todo: req.body.todo}, (err,result) => {
        if(err) return res.status('404').render('error',{error: err}) ;
        res.send(true);

    })
    // console.log("Buttooonnnnnnn!!!")
    // res.send("Almost there");
}
userController.getList = (req,res,next) => {
    console.log("getList is in process!!!")
    ToDo.find({}, (err,result) => {
        if(err) return res.status('500').render('error',{error: err});
        console.log("here is the results", result);
        res.send(JSON.stringify(result));
    })
}
userController.deleteItem = (req,res,next) => {
    console.log("deleteItem is here!!!")
    console.log("here")
    ToDo.deleteOne({_id: req.body._id}, (err, result) => {
        if(err) return res.status('500').render('error',{error: err});
        res.send(true);
    })
}

module.exports = userController;
