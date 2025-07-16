const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	userId:{
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	},
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Post" , postSchema);