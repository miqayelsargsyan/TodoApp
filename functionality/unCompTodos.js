const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('../models/todo');
const config = require('../mongoose/mongoose');

let getUnCompTodos = (res) => {
    Todo.find({completed: false}).then((todos) => {
        res.send({todos})
    })
}

module.exports = {getUnCompTodos};