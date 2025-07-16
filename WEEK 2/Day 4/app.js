const express = require('express');
const config = require('./config/config');
const connectDB = require('./config/db');
const postsRouter = require('./routers/postsRouter');

const app = express();

app.use(express.json());
app.use("/api/posts", postsRouter);

( async () => {
  await connectDB();
  app.listen(config.PORT, () => {
    console.log(`Server started on port ${config.PORT}`);
  });
})()
