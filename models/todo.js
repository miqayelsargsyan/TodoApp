let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
   text: {
       type: String,
       required: true,
       minlenght: 1,
       trim: true
   }, 
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: String,
        default: ""
    },
    _creator: {
        // required: true,
        type: mongoose.Schema.Types.ObjectId
    }
    
});

module.exports = {Todo};