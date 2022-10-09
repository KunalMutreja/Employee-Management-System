const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId
const Employee = require('./employee.js')
router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
    Employee.findById(req.params.id, (err,doc)=>{
        if(err){
            console.log("Error")
        }
        else{
            res.send(doc)
        }
    })
}else{
    return res.status(400).send("No record")
}
})
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
    Employee.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(err){
            console.log("Error")
        }
        else{
            res.send(doc)
        }
    })
}else{
    return res.status(400).send("No record")
}
})
router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let emp = {
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            department: req.body.department,
            joining: req.body.joining,
            password: req.body.password,
        }
    Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err,doc)=>{
        if(err){
            console.log("Error")
        }
        else{
            res.send(doc)
        }
    })
}else{
    return res.status(400).send("No record")
}
})

router.get('/',(req,res)=>{
    Employee.find((err,doc)=>{
        if(err){
            console.log("Error")
        }
        else{
            res.send(doc)
        }
    })
})
router.post('/',(req,res)=>{
    let emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        department: req.body.department,
        joining: req.body.joining,
        password: req.body.password,
    })
    emp.save((err, doc)=>{
        if(err){
            console.log('Error',err)
        }
        else{
            res.send(doc)
        }
    })
})
module.exports = router