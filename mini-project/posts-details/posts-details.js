// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let post = JSON.parse(localStorage.getItem('post'));

let wrapDiv = document.createElement('div');

let head = document.createElement('div');

let homeH1 = document.createElement('h1');

let linkHome = document.createElement('a');
linkHome.href = '../index.html';
linkHome.innerText = 'HOME';

let linkBack = document.createElement('a');
linkBack.href = '../user-details/user-details.html';
linkBack.innerHTML = `BACK</br>`;

homeH1.append(linkBack, linkHome);
head.appendChild(homeH1);

wrapDiv.innerHTML = `

<h5>User id: ${post.userId}</h5>

<h2>Title ${post.id}: ${post.title}</h2>

<p>${post.body}</p>
`;

let btnComments = document.createElement('button');
btnComments.classList.add('btn-comments');
btnComments.innerText = 'comments of current post';

btnComments.onclick = () => {
    let commentsDiv = document.createElement('div');
    commentsDiv.classList.add('wrap-comments');

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(response => response.json())
        .then(comments => comments.forEach(comment => {

            let commentBlock = document.createElement('div');
            commentBlock.classList.add('block-comment');

            let nameComment = document.createElement('h3');
            nameComment.innerText = `Name comment: ${comment.name}`;

            let bodyComment = document.createElement('p');
            bodyComment.innerText = comment.body;

            commentBlock.append(nameComment, bodyComment)
            commentsDiv.appendChild(commentBlock);
        }));

    document.body.appendChild(commentsDiv);

    btnComments.disabled = true;
}

wrapDiv.appendChild(btnComments);

document.body.append(head, wrapDiv);