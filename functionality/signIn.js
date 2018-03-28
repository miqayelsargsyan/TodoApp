const express = require('express');
const {Todo} = require('../models/todo');
const config = require('../mongoose/mongoose');
const {User} = require('../models/user');
const _ = require('lodash');


let signIn = (req, res) => {
    let body = _.pick(req.body,['email','password']);

    user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user)
    }).catch((e) => {res.status(400).send(e)});
}


module.exports = {signIn};