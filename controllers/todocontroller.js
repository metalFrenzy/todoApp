const  mongoose  = require('mongoose');
const Todo_collection = require('../models/todoCollection');

const firstItem = Todo_collection({item: 'kill myself'}).save((err)=>{
    if (err) throw err;
    console.log('item saved');
})



module.exports= (app)=>{
    
    app.get('/todo',(req,res)=>{
        res.render('todoView');
    })
    app.post('url',(req,res)=>{

    })
    app.delete('url',(req,res)=>{

    })








}