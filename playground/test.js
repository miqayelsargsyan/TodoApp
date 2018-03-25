const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('../models/todo');
const config = require('../mongoose/mongoose');
let app = express();
app.use(bodyParser.json());
let port = process.env.PORT || 5000;    

promise = new Promise((resolve, reject) => {
    resolve('barev');
})

promise.then((message) => {
    console.log(message)
})



app.listen(port, () => {
    console.log(`The server is up on port ${port}`);
});