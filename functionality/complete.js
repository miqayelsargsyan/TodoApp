const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('../models/todo');
let {getTodos} = require('./getTodos');
let app = express();
app.use(bodyParser.json());

let completeTodo = () => {
  
}

module.exports = {completeTodo};