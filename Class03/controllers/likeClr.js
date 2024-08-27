const Post = require('../modelSchemas/posts')
const like = require('../modelSchemas/likes');

const likePost = async (req, res) => {
    try{
        const {post, user} = req.body;
        const response = await like.create({post, user})

        const updatePostLikes = await Post.findByIdAndUpdate(post, {$push: {likes: response._id}}, {new: true} )
                                .populate("likes")
                                .exec();

        res.status(200).json({
            success: true,
            updatePostLikes,
            msg: "Posts likes updated!"
        })

        
    } catch(error){
        res.status(500).json({
            msg: `post can't be updated there is an issue: ${error}`
        })
    }
}



module.exports = likePost