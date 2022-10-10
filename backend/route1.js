const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId
const Task = require('./Task.js')
router.get('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        Task.findById(req.params.id, (err, doc) => {
            if (err) {
                console.log("Error")
            }
            else {
                res.send(doc)
            }
        })
    } else {
        return res.status(400).send("No record")
    }
})
router.delete('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        Task.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                console.log("Error")
            }
            else {
                res.send(doc)
            }
        })
    } else {
        return res.status(400).send("No record")
    }
})
router.put('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        let task = {
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            time: req.body.time,
            completion: req.body.completion
        }
        Task.findByIdAndUpdate(req.params.id, { $set: task }, { new: true }, (err, doc) => {
            if (err) {
                console.log("Error")
            }
            else {
                res.send(doc)
            }
        })
    } else {
        return res.status(400).send("No record")
    }
})

router.get('/', (req, res) => {
    Task.find((err, doc) => {
        if (err) {
            console.log("Error")
        }
        else {
            res.send(doc)
        }
    })
})
router.post('/', (req, res) => {
    let task = new Task({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        time: req.body.time,
        completion: req.body.completion
    })
    task.save((err, doc) => {
        if (err) {
            console.log('Error', err)
        }
        else {
            res.send(doc)
        }
    })
})
module.exports = router