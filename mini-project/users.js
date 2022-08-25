// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

let wrapDiv = document.createElement('div');
wrapDiv.classList.add('wrap');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.forEach(user => {
        let userDiv = document.createElement('div');
            userDiv.classList.add('user-block');

        let h2User = document.createElement('h2');
        h2User.innerText = `${user.id} - Name: ${user.name}`

        let linkDetails = document.createElement('a');
        linkDetails.href = 'user-details/user-details.html';
        linkDetails.innerText = 'User Details';

        let userBtn = document.createElement('button');
        userBtn.appendChild(linkDetails);

        userBtn.onclick = (e) => {
            localStorage.setItem('user', JSON.stringify(user))
        }

        userDiv.append(h2User, userBtn);
        wrapDiv.appendChild(userDiv);
    }))


document.body.appendChild(wrapDiv)


