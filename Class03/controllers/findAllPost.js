const Post = require('../modelSchemas/posts');

const allPosts = async (req, res) => {
    try{
        const posts = await Post.find({}).populate('likes').populate('comments');
        res.json({
            msg: "All posts are here...",
            posts: posts,
        })
    } catch(error){
        res.json({
            msg: `there is an issue while taking all posts: ${error}`
        })
    }
}

module.exports = allPosts