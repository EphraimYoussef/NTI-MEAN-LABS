const express = require('express');
const postsRouter = require('./postsRouter');

const app = express();
const port = 5000;

app.use(express.json());

app.use('/api/posts', postsRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});