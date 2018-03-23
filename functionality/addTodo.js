const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('../models/todo');
let {getTodos} = require('./getTodos');
let app = express();
app.use(bodyParser.json());


let todo;

let addTodo = (text, res) => {
     if(Todo.find({text: text})){
       res.send('You have already added todo with the same task');
       todo = new Todo ({
        text: text
        });  
     }else {
        todo.save().then((todo) => {
            res.send({todo});
           });
     }
}


module.exports = {addTodo};