const fs = require('fs');
const http = require('http');
const url = require('url');
const nunjucks = require('nunjucks');

const data = fs.readFileSync('./data.json', 'utf-8');
const posts = JSON.parse(data);

const homeTemplate = fs.readFileSync('./templates/home.html', 'utf-8');
const postTemplate = fs.readFileSync('./templates/singlePost.html', 'utf-8');
const notFoundTemplate = fs.readFileSync('./templates/404.html', 'utf-8');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === '/' || pathname === '/home') {
    res.writeHead(200,
			{ 'Content-Type': 'text/html' }
		);
    const html = nunjucks.renderString(homeTemplate, { posts });
    res.end(html);
  }

  else if (pathname === '/post') {
    const post = posts.find(p => p.id == query.id);
    if (!post) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end(notFoundTemplate);
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = nunjucks.renderString(postTemplate, post);
    res.end(html);
  }

	else if (pathname === '/api') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(posts));
	}

  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(notFoundTemplate);
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:8000/');
});
