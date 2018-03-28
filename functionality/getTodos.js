const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('../models/todo');
const config = require('../mongoose/mongoose');

let getTodos = (res) => {
    Todo.find().then((todos) => {
        res.send(todos)
    });
}


module.exports = {getTodos};