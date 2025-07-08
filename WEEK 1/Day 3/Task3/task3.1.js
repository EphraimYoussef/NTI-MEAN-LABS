// ! Task 3.1

let api = 'https://jsonplaceholder.typicode.com/posts';

function getPostsPromise(n) {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      const slicedData = data.slice(0, n);
      displayPosts(slicedData);
    })
    .catch(error => console.error('Error:', error));
}


function displayPosts(posts) {
  const container = document.getElementById('postContainer');

  posts.forEach( (post) => {
    const card = document.createElement('div');
    card.style.border = '1px solid';
    card.style.margin = '10px';
    card.style.padding = '10px';
    card.style.borderRadius = '5px';
		card.style.backgroundColor = 'lightblue';

    const cardTitle = document.createElement('h3');
		cardTitle.style.fontStyle = 'italic';
    cardTitle.textContent = `${post.id}: ${post.title}`;

    const cardBody = document.createElement('p');
		cardBody.style.fontSize = '18px';
    cardBody.textContent = post.body;

    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    container.appendChild(card);
  });
}


getPostsPromise(5);