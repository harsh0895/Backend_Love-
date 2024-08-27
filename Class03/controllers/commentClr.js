const Post = require('../modelSchemas/posts')
const comment = require('../modelSchemas/comments')

const createComment = async (req, res) => {
    try{

        const {post, user, body} = req.body;
        const response = await comment.create({post, user, body});

        // after taking the comment update a comment array of post schema...
        const updatePost = await Post.findByIdAndUpdate(post, {$push: {comments: response._id} }, {new: true} )
                            .populate("comments") // populate the comment array with comment documents...
                            .exec();
                            
        res.status(200).json({
            success: true,
            post: updatePost,
            msg: "comment successful."
        }) 

    } catch(error){
        res.status(500).json({
            msg: `there is an issue while creating a comment: ${error}`
        })
    }
}

// get all comments
const allComments = async (req, res) => {
    try{
        const allcomments = await comment.find({})
        res.status(200).json({
            comment: allcomments,
            msg: `these are all comment`
        })
    } catch(error){
        res.status(500).json({
            msg: `can not fetched all comments because: ${error}`
        })
    }
} 

// module.exports = createComment
// module.exports = allComments
module.exports = {
    createComment: createComment,
    allComments: allComments
}