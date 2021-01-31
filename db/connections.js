const mongoose = require('mongoose');

//conect to databse 
module.exports=()=>{
mongoose.connect('mongodb://localhost/todoDb',{
    useNewUrlParser: true,
    useUnifiedTopology: true

});

mongoose.connection.once('open',()=>{
    console.log("connection is made");
}).on('error',(error)=>{
    console.log("connection error",error);
});
}