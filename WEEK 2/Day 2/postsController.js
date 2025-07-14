const fs = require('fs');

const readData = () => {
  const data = fs.readFileSync('data.json', 'utf8');
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};

const getPosts = (req, res) => {
  const jsonData = readData();
  res.status(200).json(jsonData);
};

const getPostById = (req, res) => {
  const jsonData = readData();
  const postId = parseInt(req.params.id);
  const post = jsonData.find(p => p.id === postId);
  if (post) {
    res.status(200).json(post);
  } 
  else {
    res.status(404).json({ message: 'Post not found' });
  }
};

const createPost = (req, res) => {
  const jsonData = readData();
  const { userId, title, body } = req.body;

  if (!userId || !title || !body) {
    return res.status(400).json({ message: 'userId, title, and body are required' });
  }

  const id = jsonData.length ? jsonData[jsonData.length - 1].id + 1 : 1;
  const newPost = { id, userId, title, body };
  jsonData.push(newPost);
  writeData(jsonData);
  res.status(201).json(newPost);
};

const updatePostPut = (req, res) => {
  const jsonData = readData();
  const postId = parseInt(req.params.id);
  const postIndex = jsonData.findIndex(p => p.id === postId);

  const { userId, title, body } = req.body;
  if (!userId || !title || !body) {
    return res.status(400).json({ message: 'userId, title, and body are required' });
  }

  if (postIndex !== -1) {
    const updatedPost = { id: postId, userId, title, body };
    jsonData[postIndex] = updatedPost;
    writeData(jsonData);
    res.status(200).json(updatedPost);
  } 
  else {
    res.status(404).json({ message: 'Post not found' });
  }
};

const updatePostPatch = (req, res) => {
  const jsonData = readData();
  const postId = parseInt(req.params.id);
  const postIndex = jsonData.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    const updatedPost = { ...jsonData[postIndex], ...req.body };
    jsonData[postIndex] = updatedPost;
    writeData(jsonData);
    res.status(200).json(updatedPost);
  } 
  else {
    res.status(404).json({ message: 'Post not found' });
  }
};

const deletePost = (req, res) => {
  const jsonData = readData();
  const postId = parseInt(req.params.id);
  const postIndex = jsonData.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    jsonData.splice(postIndex, 1);
    writeData(jsonData);
    res.status(204).send();
  } 
  else {
    res.status(404).json({ message: 'Post not found' });
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
