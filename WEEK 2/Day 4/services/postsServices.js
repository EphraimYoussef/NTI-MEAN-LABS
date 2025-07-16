const postsRepo = require('../repos/postsRepo');

const getPosts = async () => {
	try {
		const posts = await postsRepo.getPosts();
		return posts;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

const getPostById = async (id) => {
	try {
		const post = await postsRepo.getPostById(id);
		return post;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

const createPost = async (postData) => {
	try {
		const newPost = await postsRepo.createPost(postData);
		return newPost;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

const updatePostPut = async (id, postData) => {
	try {
		const updatedPost = await postsRepo.updatePostPut(id, postData);
		return updatedPost;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

const updatePostPatch = async (id, postData) => {
	try {
		const updatedPost = await postsRepo.updatePostPatch(id, postData);
		return updatedPost;
	} 
	catch (error) {
		throw new Error(error.message);
	}
}

const deletePost = async (id) => {
	try {
		const deletedPost = await postsRepo.deletePost(id);
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