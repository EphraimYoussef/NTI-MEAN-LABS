const express = require('express');
const router = express.Router();
const postsController = require('./postsController');

router.get("/", postsController.getPosts);
router.get("/:id", postsController.getPostById);
router.post("/", postsController.createPost);
router.put("/:id", postsController.updatePostPut);
router.patch("/:id", postsController.updatePostPatch);
router.delete("/:id", postsController.deletePost);

module.exports = router;