const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('../models/todo');
const config = require('../mongoose/mongoose');

let addTodo = (text, res) => {
    let todo;
    Todo.find().then((todos) => {
       for( let i = 0; i < todos.length; ++i){
           if(todos[i].text === text){
            return  res.status(400).send('You have already added the same task')
            }
        }
            todo = new Todo ({
                text: text
            });  
            todo.save().then((todo) => {
                res.send({todo});
            });
   });
}


module.exports = {addTodo};