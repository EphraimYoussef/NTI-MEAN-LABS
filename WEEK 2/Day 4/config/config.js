const dotenv = require('dotenv');
dotenv.config();

const config = {
	PORT: process.env.PORT || 3000,
	mongoURI: process.env.mongoURI
};

module.exports = config;