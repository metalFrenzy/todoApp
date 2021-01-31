const mongoose = require('mongoose');
const Todo_collection = require('../models/todoCollection');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
mongoose.set('useFindAndModify', false);


module.exports = (app) => {
    app.get('/todo', (req, res) => {
        //get data from db and pass it to the view 
        Todo_collection.find({}, (err, data) => {
            if (err) throw err;
            res.render('todoView', { todos: data });



        });

    })

    app.post('/todo', urlencodedParser, (req, res) => {
        //get data from the view and save it to db
        const newTodo = Todo_collection(req.body).save((err, data) => {
            if (err) throw err;
            res.redirect('/todo');


        })

    })
    app.delete('/todo/:id', (req, res) => {
        Todo_collection.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err)
                console.log(err)
            else {
                if (doc) {
                    console.log("Deleted: ", doc)
                    res.json({ deleted: true })
                } else {
                    res.json({ deleted: false })
                }

            }
        })


    })





}