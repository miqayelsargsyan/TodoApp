const _ = require('lodash');
const {User} = require('../models/user');


let authenticate = (req, res, next) => {
    let token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        if(!user){
            return res.send('No user matched')
        }
            req.user = user;
            req.token = token;   
            next();
            
    },(e) => {
        
        res.status(401).send(e);
        })
} 

module.exports = {authenticate};