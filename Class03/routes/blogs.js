const express = require('express')
const createPost = require('../controllers/postsClr')
const allPosts = require('../controllers/findAllPost')
const {createComment, allComments} =  require('../controllers/commentClr')
const likePost = require('../controllers/likeClr')



const router = express.Router();


router.get('/posts', allPosts)
router.post('/posts/create', createPost)

router.get('/comments', allComments)
router.post('/comments/create', createComment)
router.post('/likePosts', likePost)

module.exports = router