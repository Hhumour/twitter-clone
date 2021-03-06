const mongoose = require('mongoose');
//mongoose is a wrapper of mongoDB

const url = "mongodb://localhost:27017/bootcamp";

mongoose.Promise = global.Promise;

//connecting to the database
mongoose.connect(url, {useNewUrlParser: true, keepAlive: 1}).then((res) =>{
    console.log("Connection Established -- DONE");
    //console.log(JSON.stringify(res))
}).catch(error =>{
    console.log(error.message)
});
module.exports = mongoose;