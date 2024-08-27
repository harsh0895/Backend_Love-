const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    
    user: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "like",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }]
    
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post