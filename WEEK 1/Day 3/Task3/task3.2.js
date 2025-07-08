// ! Task 3.2

let api = 'https://jsonplaceholder.typicode.com/posts';

async function getPostsAsync(n) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    const slicedData = data.slice(0, n);
    displayPosts(slicedData);
  } 
	catch (error) {
    console.error('Error:', error);
  }
}


function displayPosts(posts) {
  const container = document.getElementById('postContainer');

  posts.forEach( (post) => {
    const card = document.createElement('div');
    card.style.border = '1px solid';
    card.style.margin = '10px';
    card.style.padding = '10px';
    card.style.borderRadius = '5px';
		card.style.backgroundColor = 'lightgrey';

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

getPostsAsync(7);