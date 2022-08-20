// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         userAge: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         userAge: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         userAge: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         userAge: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         userAge: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// let divWrap = document.createElement('div');
// divWrap.classList.add('wrap');
//
// for (const simpson of simpsons) {
//     let {name, surname, userAge, info, photo} = simpson;
//
//     let divObject = document.createElement('div');
//     divObject.classList.add('member');
//
//     let hr = document.createElement('hr');
//
//     let h2 = document.createElement('h2');
//     h2.innerText = `${name} ${surname} userAge: ${userAge}`
//
//     let img = document.createElement('img');
//     img.src = photo;
//     img.alt = `${name} ${surname}`;
//
//     let paragraf = document.createElement('p');
//     paragraf.innerText = info;
//
//     divObject.append(hr, h2, paragraf, img);
//     divWrap.appendChild(divObject)
//
// }
//     document.body.appendChild(divWrap);

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// let divWrap = document.createElement('div');
//
// for (const element of coursesArray) {
//
//     let divElement = document.createElement('div');
//
//     let h2 = document.createElement('h2');
//     h2.innerText = element.title;
//
//     let paragraph = document.createElement("p");
//     paragraph.innerHTML = `Month Duration: <strong>${element.monthDuration}</strong> - Hour Duration: <strong>${element.hourDuration}</strong>`;
//
//     let ulHtmlElement = document.createElement('ul');
//
//     let divModule = document.createElement('div');
//     divModule.appendChild(ulHtmlElement);
//
//     for (const el of element.modules) {
//         let liHtmlElement = document.createElement('li');
//         liHtmlElement.innerText = el;
//
//         ulHtmlElement.appendChild(liHtmlElement);
//     }
//
//     divElement.append(h2, paragraph, divModule);
//     divWrap.appendChild(divElement);
// }
// document.body.appendChild(divWrap);

// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div = document.createElement('div');
// div.innerText = 'original'
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.style.background = 'silver';
// div.style.color = 'yellow';
// div.style.height = '200px';
// div.style.fontSize = '70px';
// div.style.marginBottom = '10px';
//
// let cloneNode = div.cloneNode(true);
// cloneNode.innerText = 'clone'
//
// document.body.append(div, cloneNode);

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// const array = ['Main', 'Products', 'About us', 'Contacts'];
//
// let classMenu = document.getElementsByClassName('menu')[0];
//
// for (const item of array) {
//     let li = document.createElement('li');
//     li.innerText = item;
//     classMenu.appendChild(li)
// }

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//
//     let h4 = document.createElement('h4');
//     h4.innerText = `${item.title} - Month Duration: ${item.monthDuration}`;
//
//     document.body.appendChild(h4);
// }

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = item.title;
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = item.monthDuration;
//
//     div.append(h1, p);
//
//     document.body.appendChild(div);
// }

// - Створити довільний елемент з id = text. Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let div = document.createElement('div');
// div.setAttribute('id', 'text');
//
// let p = document.createElement('p');
// p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi deserunt dolores ea eaque incidunt nobis ratione reiciendis sit tempora?';
//
// div.appendChild(p);
//
// let btnDelete = document.createElement('button');
// btnDelete.innerText = 'delete';
//
// btnDelete.onclick = function (e) {
//     document.getElementById('text').remove();
// };
//
// let btnReturn = document.createElement('button');
// btnReturn.innerText = 'return';
//
// btnReturn.onclick = function (e) {
//     document.body.appendChild(div);
// };
//
// document.body.append(btnDelete, btnReturn, div);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.createElement('form');
// form.setAttribute('name', 'form1');
//
// let input = document.createElement("input");
// input.setAttribute('type', 'number');
// input.setAttribute('name', 'userAge');
// input.setAttribute('placeholder', 'your age');
//
// let btn = document.createElement('button');
// btn.innerText = 'send';
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//
//     if (this.userAge.value < 18) {
//         alert('You are very young!!!');
//     } else {
//         alert('Welcome!!!')
//     }
//
// };
//
// form.append(input, btn);
// document.body.appendChild(form);

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
//
// let form1 = document.forms.f1;
//
// let table = document.createElement('table');
// table.style.borderCollapse = 'collapse'
//
// form1.onsubmit = function (e) {
//     e.preventDefault();
//     for (let i = 0; i < this.lines.value; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);
//
//         for (let i = 0; i < this.cells.value; i++) {
//             let td = document.createElement('td');
//             td.innerText = this.text.value;
//             td.style.border = 'solid 2px black';
//             td.style.padding = '5px 5px';
//             tr.appendChild(td);
//         }
//     }
// }
//
// document.body.appendChild(table);

//                                              additional

// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.
// за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику headings, всі параграфи покласти в характеристику (масив) paragraphs
//
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

let divWrap = document.createElement('div');

for (const user of usersList) {

    let divUser = document.createElement('div');

    let nameUser = document.createElement('h2');
    nameUser.innerText = user.name;

    let surname = document.createElement('h2');
    surname.innerText = user.username;

    let email = document.createElement('h4');
    email.innerText = user.email;

    let address = document.createElement('ul');

    for (const item in user.address) {

        if (typeof user.address[item] === 'object') {
            break;
        } else {

            let elementLi = document.createElement('li');
            elementLi.innerText = user.address[item]
            address.appendChild(elementLi);
        }

    }

    let ulGeo = document.createElement('ul');

    for (const item in user.address.geo) {

        let geo = document.createElement('li')
        geo.innerText = `${item}: ${user.address.geo[item]}`;

        ulGeo.appendChild(geo);
    }

    address.appendChild(ulGeo);

    let phone = document.createElement('p');
    phone.innerText = `Phone: ${user.phone}`;

    let website = document.createElement('p');
    website.innerText = `Web site: ${user.website}`;

    let company = document.createElement('ul');

    for (const companyItem in user.company) {

        let companyElement = document.createElement('li');
        companyElement.innerText = user.company[companyItem]
        company.appendChild(companyElement);
    }

    divUser.append(nameUser, surname, email, address, phone, website, company);
    divWrap.appendChild(divUser);
}

document.body.appendChild(divWrap);
//
// // let h1 = document.getElementsByTagName('h1');
// // let h2 = document.getElementsByTagName('h2');
// // let h3 = document.getElementsByTagName('h3');
// // let h4 = document.getElementsByTagName('h4');
// // let h5 = document.getElementsByTagName('h5');
// // let h6 = document.getElementsByTagName('h6');
//
// let nodeListOf = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
// let p = document.getElementsByTagName('p');
//
// function explorer(page) {
//     let array = [];
//     // array.push(h1, h2, h3, h4, h5, h6, p);
//     array.push(nodeListOf, p);
//
//     let children = page.children;
//
//     if (children.length !== 0) {
//         for (const child of children) {
//             explorer(child);
//         }
//     }
//
//     return array;
// }
//
// const array = explorer(document.body);
//
// // let reduce = array.reduce((acc, value) => {
// //     if (value === h1 && value.length !== 0
// //         || value === h2 && value.length !== 0
// //         || value === h3 && value.length !== 0
// //         || value === h4 && value.length !== 0
// //         || value === h5 && value.length !== 0
// //         || value === h6 && value.length !== 0
// //     ) {
// //         acc.headings.push(value);
// //     }
// //     if (value === p && value.length !== 0) {
// //         acc.paragraphs.push(value);
// //     }
// //     return acc;
// // }, {headings: [], paragraphs: []});
// //
// // console.log(reduce)
//
// let reduce = array.reduce((acc, value) => {
//
//     if (value === nodeListOf && value.length !== 0) {
//         acc.headings.push(value);
//     }
//     if (value === p && value.length !== 0) {
//         acc.paragraphs.push(value);
//     }
//
//     return acc;
//
// }, {headings: [], paragraphs: []});
//
// console.log(reduce);

// зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>
//
// let div = document.createElement('div');
//
// let input = document.getElementsByTagName('input')[0];
//
// input.onkeydown = function (e) {
//     if (e.key === 'Tab') {
//         div.remove();
//         let newTag = document.createElement(`${input.value}`);
//         document.body.appendChild(newTag);
//     }
// };
//
// document.body.appendChild(div);


//                                              supper additional
