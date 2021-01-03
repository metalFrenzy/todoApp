const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model
const todoSchema = new Schema({
    item: String
});

const Todo_collection = mongoose.model('Todos',todoSchema);

module.exports = Todo_collection;

