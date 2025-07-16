const Post = require('../models/Post');

const getPosts = async () => {
	try {
		const posts = await Post.find();
		return posts;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

const getPostById = async (id) => {
	try {
		const postById = await Post.findById(id);
		return postById;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

const createPost = async (postData) => {
	try {
		const newPost = new Post(postData);
		const savedPost = await newPost.save();
		return savedPost;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

const updatePostPut = async (id, postData) => {
	try {
		const updatedPost = await Post.findByIdAndUpdate(id, postData , { new: true , runValidators: true });
		return updatedPost;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

const updatePostPatch = async (id, postData) => {
	try {
		const updatedPost = await Post.findByIdAndUpdate(id, { $set: postData }, { new: true , runValidators: true });
		return updatedPost;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

const deletePost = async (id) => {
	try {
		const deletedPost = await Post.findByIdAndDelete(id);
		return deletedPost;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

module.exports = {
	getPosts,
	getPostById,
	createPost,
	updatePostPut,
	updatePostPatch,
	deletePost
}