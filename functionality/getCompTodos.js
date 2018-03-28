const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('../models/todo');
const config = require('../mongoose/mongoose');

let getCompTodos = (res) => {
    Todo.find({completed: true}).then((todos) => {
        res.send({todos})
    })
}

module.exports = {getCompTodos};