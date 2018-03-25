const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('../models/todo');
let {getTodos} = require('./getTodos');
const config = require('../mongoose/mongoose');
let app = express();
app.use(bodyParser.json());


let completeTodo = (id, res) => {
    let currentdate = new Date(); 
    let datetime = "Completed at: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    Todo.findOneAndUpdate({_id: id}, {$set: {completed:true}}, {$set: {completedAt: datetime}}).then((todo) => {
        res.send({todo});
    });
}

module.exports = {completeTodo};