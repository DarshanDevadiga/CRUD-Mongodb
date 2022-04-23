const router = require('express').Router();
const tasks = require('../models/taskmodal')
router.get('/',(req,res)=>{
    var mytasks;
    tasks.find({},(err,data)=>{
        if(err){
            console.log(err);
        }
        if(data){
            mytasks=data;
        }
    res.render('index',{data:mytasks});
    });
});
router.post('/create',(req,res)=>{
const description =req.body.description;
const completed=req.body.completed;
tasks({description:description,completed:completed}).save(function(err,doc){
    if(err){
        console.log(err);
    }
    res.redirect('/');
    console.log("Created");
});
});

router.post('/delete',(req,res)=>{
    const id = req.body.id;
    tasks.findOneAndRemove({ _id: id }, (err,doc) =>{
        res.redirect('/');
        console.log("Deleted");
    } );
});

router.post('/update',(req,res)=>{
    const id = req.body.id;
    tasks.findOneAndUpdate({ _id: id }, { completed:true }, (err,doc) =>{
        res.redirect('/');
        console.log("Updated");
    } );
});

module.exports=router;