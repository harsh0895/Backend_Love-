const mongoose = require('mongoose');

// creating todo schemas

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    description: {
        type: String,
        maxLength: 50
    },
    createdAt: {
        type: Date,
        // required: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        // required: true,
        default: Date.now()
    }
})

const todo = mongoose.model('todo', TodoSchema);

module.exports = todo;