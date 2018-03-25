const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('../models/todo');
let app = express();
app.use(bodyParser.json());

let getTodos = (res) => {
    Todo.find().then((todos) => {
        res.send(todos)
    });
}


module.exports = {getTodos};