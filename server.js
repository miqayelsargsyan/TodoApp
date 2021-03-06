const config = require('./mongoose/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {addTodo, saveTodo} = require('./functionality/addTodo');
const {getTodos} = require('./functionality/getTodos');
const {getCompTodos} = require('./functionality/getCompTodos');
const {getUnCompTodos} = require('./functionality/unCompTodos');
const {completeTodo} = require('./functionality/complete');
const {signUp} = require('./functionality/signUp');
const {logIn} = require('./functionality/logIn');
const {authenticate} = require('./middleware/authenticate')

let port = process.env.PORT || 3000;
let app = express();
app.use(bodyParser.json());



app.post('/api/signUp', (req, res) => {
    signUp(req, res);
});

app.post('/api/logIn', (req, res) => {
    logIn(req, res);
})

app.post('/api/newTodo', authenticate , (req, res) => {
    addTodo(req.body.text, res);
});

app.get('/api/todos', authenticate, (req, res) => {
    getTodos(res);
});

app.get('/api/compTodos', authenticate, (req, res) => {
    getCompTodos(res);
});

app.get('/api/unCompTodos', authenticate, (req, res) => {
    getUnCompTodos(res);
});

app.patch('/api/complete/:id', authenticate, (req, res) => {
    let id = req.params.id;
    completeTodo(id, res);
});

app.listen(port, () => {
    console.log(`The server is up on port ${port}`);
});
