const Post = require('../modelSchemas/posts');

const createPost = async (req, res) => {
    try{
        const {user, title, body} = req. body;
        const response = await Post.create({user, title, body});
        res.json({
            success: true,
            post: response,
            msg: "Post created successfully..."
        })
    } catch(error){
        console.log(error)
        res.json({
            msg: "post can't be created there is an issue..."
        })
    }
}

module.exports = createPost;