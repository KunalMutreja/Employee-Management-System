const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Soumyadip:20csu214@cluster0.jm2zckm.mongodb.net/Hackaton',err =>{
    if(!err){
        console.log("Db Connected")
    }
    else{
        console.log("Not Connected")
    }
})
module.exports = mongoose