const express = require('express');
const todoController = require('./controllers/todocontroller');

const app = express();

//template engine setup
app.set('view engine','ejs');

// servew static file 
app.use('/assets',express.static('assets'))

//controllers
todoController(app);

// listen to port 
app.listen(3000);
console.log('port 3000');
