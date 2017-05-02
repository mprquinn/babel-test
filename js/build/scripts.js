const comments = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 4,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    "postId": 1,
    "id": 5,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  }
]

const posts = document.querySelector('.posts'),
      search = document.querySelector('.search');

function generatePosts() {
  const allPosts = comments.map(comment => {
    return `
      <li>
        <p><strong>${comment.name}</strong></p>
        <p>${comment.email}</p>
        <p>${comment.body}</p>
      </li>
    `
  }).join('');
  posts.innerHTML = allPosts;
}

function findMatches(wordToMatch, comments) {
  return comments.filter(comment => {
    const regex = new RegExp(wordToMatch, 'gi');
    return comment.email.match(regex) || comment.body.match(regex) || comment.name.match(regex);
  });
}

function typeAhead(e) {
  const searchTerm = e.target.value;

  // if (searchTerm.length < 1) return;

  const result = findMatches(searchTerm, comments);

  console.table(result);

  const newHtml = result.map(comment => {
    const regex = new RegExp(this.value, 'gi'),
          commentName = comment.name.replace(regex, `<span class="hl">${this.value}</span>`);
          commentBody = comment.body.replace(regex, `<span class="hl">${this.value}</span>`);
          commentEmail = comment.email.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <p><strong>${commentName}</strong></p>
        <p>${commentEmail}</p>
        <p>${commentBody}</p>
      </li>
    `
  }).join('');

  posts.innerHTML = newHtml;

}

search.addEventListener('keyup', typeAhead);

generatePosts();