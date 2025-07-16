const postsController = require('../controllers/postsController');
const express = require('express');
const router = express.Router();

router.get('/', postsController.getPosts); 					// ? get all posts
router.get('/:id', postsController.getPostById);			// ? get post by id	
router.post('/', postsController.createPost);		        // ? create a new post
router.put('/:id', postsController.updatePostPut);  	    // ? update post by id
router.patch('/:id', postsController.updatePostPatch);      // ? patch post by id
router.delete('/:id', postsController.deletePost);			// ? delete post by id

module.exports = router;