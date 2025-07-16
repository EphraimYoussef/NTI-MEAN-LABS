const mongoose = require('mongoose');
const postsServices = require('../services/postsServices');

const getPosts = async (req, res) => {
	try {
		const posts = await postsServices.getPosts();
		res.status(200).json(posts);
	} 
	catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getPostById = async (req, res) => {
	try {
		const postId = req.params.id;
		if(!mongoose.Types.ObjectId.isValid(postId)) {
			return res.status(400).json({ message: 'Invalid post ID format' });
		}
		const post = await postsServices.getPostById(postId);
		if (!post) {
			return res.status(404).json({ message: 'Post not found' });
		}
		res.status(200).json(post);
	} 
	catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const createPost = async (req, res) => {
	try {
		const postData = req.body;
		const newPost = await postsServices.createPost(postData);
		res.status(201).json(newPost);
	} 
	catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updatePostPut = async (req, res) => {
	try {
		const postId = req.params.id;
		if(!mongoose.Types.ObjectId.isValid(postId)) {
			return res.status(400).json({ message: 'Invalid post ID format' });
		}

		const postData = req.body;
		if ( !postData.title?.trim() || !postData.body?.trim() ) {
			return res.status(400).json({ message: 'Title and body are required for PUT' });
		}

		const updatedPost = await postsServices.updatePostPut(postId, postData);
		if (!updatedPost) {
			return res.status(404).json({ message: 'Post not found' });
		}
		res.status(200).json(updatedPost);
	} 
	catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updatePostPatch = async (req, res) => {
	try {
		const postId = req.params.id;
		if(!mongoose.Types.ObjectId.isValid(postId)) {
			return res.status(400).json({ message: 'Invalid post ID format' });
		}

		const postData = req.body;
		const updatedPost = await postsServices.updatePostPatch(postId, postData);
		if (!updatedPost) {
			return res.status(404).json({ message: 'Post not found' });
		}
		res.status(200).json(updatedPost);
	} 
	catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deletePost = async (req, res) => {
	try {
		const postId = req.params.id;
		if(!mongoose.Types.ObjectId.isValid(postId)) {
			return res.status(400).json({ message: 'Invalid post ID format' });
		}
		const deletedPost = await postsServices.deletePost(postId);
		if (!deletedPost) {
			return res.status(404).json({ message: 'Post not found' });
		}
		res.status(200).json({message: 'Post deleted'});
	} 
	catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getPosts,
	getPostById,
	createPost,
	updatePostPut,
	updatePostPatch,
	deletePost
};
