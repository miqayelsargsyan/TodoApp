const config = require('./mongoose/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('./models/todo');
let {addTodo, saveTodo} = require('./functionality/addTodo');
let {getTodos} = require('./functionality/getTodos');
let {getCompTodos} = require('./functionality/getCompTodos');
let {getUnCompTodos} = require('./functionality/unCompTodos');
let {completeTodo} = require('./functionality/complete');

let port = process.env.PORT || 3000;
let app = express();
app.use(bodyParser.json());



app.post('/api/newtodo', (req, res) => {
    addTodo(req.body.text, res);
});

app.get('/api/todos', (req, res) => {
    getTodos(res);
});

app.get('/api/compTodos', (req, res) => {
    getCompTodos(res);
});

app.get('/api/unCompTodos', (req, res) => {
    getUnCompTodos(res);
});

app.patch('/api/complete/:id', (req, res) => {
    let id = req.params.id;
    completeTodo(id, res);
});

app.listen(port, () => {
    console.log(`The server is up on port ${port}`);
});
