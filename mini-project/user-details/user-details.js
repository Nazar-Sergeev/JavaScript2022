// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


let user = JSON.parse(localStorage.getItem('user'));

let wrapDiv = document.createElement('div');
wrapDiv.classList.add('wrap');

let head = document.createElement('div');

let homeH1 = document.createElement('h1');

let linkHome = document.createElement('a');
linkHome.href = '../index.html';
linkHome.innerText = 'HOME';

homeH1.appendChild(linkHome);
head.appendChild(homeH1);

let h4Element = document.createElement('h4');
h4Element.innerText = `id: ${user.id}`;

let h2Element = document.createElement('h2');
h2Element.innerText = `Name: ${user.name} - ${user.username}`;

let h3Element = document.createElement('h3');
h3Element.innerHTML = `Phone: ${user.phone} - email: ${user.email}</br>web site: ${user.website}`;

let ulCompany = document.createElement('ul');
ulCompany.innerHTML = `<h5>Company</h5>`;

for (const key in user.company) {
    let liCompany = document.createElement('li');
    liCompany.innerText = user.company[key];
    ulCompany.appendChild(liCompany);
}

let ulAddress = document.createElement('ul');
ulAddress.innerHTML = `<h5>Address user</h5>`;

for (const key in user.address) {
    let item = user.address[key];

    if (typeof item !== 'object') {
        let liElement = document.createElement('li');
        liElement.innerText = item;
        ulAddress.appendChild(liElement);
    } else {
        let geoUl = document.createElement('ul');

        for (const itemKey in item) {
            let geoLi = document.createElement('li');
            geoLi.innerText = `${itemKey}: ${item[itemKey]}`
            geoUl.appendChild(geoLi);
        }

        ulAddress.appendChild(geoUl);
    }
}

let btnPost = document.createElement('button');
btnPost.innerText = 'post of current user';

let wrapPosts = document.createElement('div');
wrapPosts.classList.add('wrap-posts');

btnPost.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => posts.forEach(post => {

            let postsDiv = document.createElement('div');
            postsDiv.classList.add('post-block');

            let h3ElementPost = document.createElement('h3');
            h3ElementPost.innerText = `Title post ${post.id}: ${post.title}`;

            let linkDetailsPost = document.createElement('a');
            linkDetailsPost.href = '../posts-details/posts-details.html';
            linkDetailsPost.innerText = 'posts details';

            let btnDetails = document.createElement('button');

            btnDetails.onclick = () => {
                localStorage.setItem('post', JSON.stringify(post));
            }
            postsDiv.append(h3ElementPost,btnDetails)
            btnDetails.appendChild(linkDetailsPost);
            // h3ElementPost.appendChild(btnDetails);
            wrapPosts.appendChild(postsDiv)
        }));
    btnPost.disabled = true;
}


wrapDiv.append(h4Element, h2Element, h3Element, ulAddress, ulCompany, btnPost);

document.body.append(head, wrapDiv, wrapPosts);



