const mongoose = require('mongoose')
const Task = mongoose.model('Task', {
    name: { type: String },
    type: { type: String },
    description: { type: String },
    time: { type: String },
    completion: { type: String }
})
module.exports = Task 