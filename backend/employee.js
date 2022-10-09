const mongoose = require('mongoose')
const Employee = mongoose.model('Employee',{
    name: {type: String},
    email: {type: String},
    contact: {type: String},
    department: {type: String},
    joining: {type: String},
    password: {type: String},
})
module.exports = Employee 