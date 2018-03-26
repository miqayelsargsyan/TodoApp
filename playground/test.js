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

let body =  _.pick(req.body,['text','completed']);

if(!ObjectID.isValid){
    res.status(400).send('Invalid ID');
}

if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = datetime;
} else {
    body.completed = false;
    body.completedAt = null;
}
Todo.findOneAndUpdate({_id: id}, {$set: body}, {new: true}).then((todo) => {
    if(!todo){
        return res.status(404).send();
    }
    res.send({todo});
    
}).catch((e) => {
    res.status(400).send();
});


app.listen(port, () => {
    console.log(`The server is up on port ${port}`);
});