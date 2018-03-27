const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('../models/todo');
const config = require('../mongoose/mongoose');
const {ObjectID} = require('mongodb');
let {getTodos} = require('./getTodos');
let app = express();
app.use(bodyParser.json());


let completeTodo = (id, res) => {
    let currentdate = new Date(); 
    let datetime = currentdate.getDate() + "/"
                   + (currentdate.getMonth()+1)  + "/"
                   + currentdate.getFullYear() + " "
                   + currentdate.getHours() +  ":"
                   + currentdate.getMinutes() + ":"
                   + currentdate.getSeconds();

    if(!ObjectID.isValid){
        return res.status(400).send('Invalid ID');
    }

    Todo.findOneAndUpdate({_id: id}, {$set: {completed: true}}, {new: true}).then((todo) => {
    });

    Todo.findById(id).then((todo) => {
        if(todo.completed){
            todo.completedAt = datetime;
        } else {
            tod.completedAt = null;
        }
        
        Todo.findOneAndUpdate({_id: id}, {$set: {completedAt: datetime}}, {new: true}).then((todo) => {
            if(!todo){
                return res.status(404).send();
                }
                    res.send({todo});
                }).catch((e) => {
                    res.status(400).send();
                });
    })
}

module.exports = {completeTodo};