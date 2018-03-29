const express = require('express');
const config = require('../mongoose/mongoose');
const {User} = require('../models/user');
const _ = require('lodash');

let logIn = (req, res) => {
    let user = _.pick(req.body,['email','password']);
    User.findByCredentials(user.email, user.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.json({ email: user.login, jwtToken: token });
        });
    }).catch((e) => {
      res.status(400).send('You are not logged in');
    });
    
}


module.exports = {logIn};