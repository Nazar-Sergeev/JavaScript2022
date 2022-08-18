// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

//
// const users = [];
// let user1 = new User(1, 'СЕРГЕЙ', 'БЕДУХА', 'beduha@gmail.com', +380111111111);
// let user2 = new User(2, 'ИВАН', 'БУЧАКЧИЙСКИЙ', 'bucha@gmail.com', +380222222222);
// let user3 = new User(3, 'АНТОН', 'ВАСИЛЕНКО', 'vasilenko@gmail.com', +380333333333);
// let user4 = new User(4, 'ЮРИЙ', 'ГУРОВ', 'gurov@gmail.com', +380444444444);
// let user5 = new User(5, 'ИГОРЬ', 'ДЯНКОВ', 'dyankov@gmail.com', +380555555555);
// let user6 = new User(6, 'ГЛІБ', 'КОВАЛЬОВ', 'koval@gmail.com', +380666666666);
// let user7 = new User(7, 'АЛЕКСАНДР', 'ХАТЬКО', 'khatko@gmail.com', +380777777777);
// let user8 = new User(8, 'ВЛАДИСЛАВ', 'СЕМЕНКО', 'semenko@gmail.com', +380888888888);
// let user9 = new User(9, 'АНТОН', 'ТВЕРДОХЛІБ', 'hlib@gmail.com', +380999999999);
// let user10 = new User(10, 'РУСЛАН', 'ФИЛЬЧАКОВ', 'filya@gmail.com', +380123456789);
//
// users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
// let filteredUsers = users.filter(user => user.id % 2 === 0);
// console.log(filteredUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortedUsers = users.sort((u1, u2) => u1.id - u2.id);
// console.log(sortedUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client extends User {
//     constructor(id, name, surname, email, phone, order = []) {
//         super(id, name, surname, email, phone);
//         this.order = order;
//     }
// }
//
// const clients = [
//     new Client(1, 'СЕРГЕЙ', 'БЕДУХА', 'beduha@gmail.com', +380111111111, ['butter', 'bread']),
//     new Client(2, 'ИВАН', 'БУЧАКЧИЙСКИЙ', 'bucha@gmail.com', +380222222222, ['juse', 'butter', 'bread']),
//     new Client(3, 'АНТОН', 'ВАСИЛЕНКО', 'vasilenko@gmail.com', +380333333333, ['beer', 'juse', 'butter', 'bread']),
//     new Client(4, 'ЮРИЙ', 'ГУРОВ', 'gurov@gmail.com', +380444444444, ['beer', 'juse', 'butter', 'bread']),
//     new Client(5, 'ИГОРЬ', 'ДЯНКОВ', 'dyankov@gmail.com', +380555555555, ['beer', 'chips']),
//     new Client(6, 'ГЛІБ', 'КОВАЛЬОВ', 'koval@gmail.com', +380666666666, ['beer', 'juse', 'butter']),
//     new Client(7, 'АЛЕКСАНДР', 'ХАТЬКО', 'khatko@gmail.com', +380777777777, ['beer', 'juse', 'butter', 'bread', 'milk']),
//     new Client(8, 'ВЛАДИСЛАВ', 'СЕМЕНКО', 'semenko@gmail.com', +380888888888, ['beer', 'juse', 'butter', 'bread']),
//     new Client(9, 'АНТОН', 'ТВЕРДОХЛІБ', 'hlib@gmail.com', +380999999999, ['beer', 'bread']),
//     new Client(10, 'РУСЛАН', 'ФИЛЬЧАКОВ', 'filya@gmail.com', +380123456789, ['beer', 'butter', 'bread'])
// ];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortedOrder = clients.sort((c1, c2) => c1.order.length - c2.order.length);
// console.log(sortedOrder);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, yearProduction, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.yearProduction = yearProduction;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const item in this) {
            if (typeof this[item] !== 'function') {
                console.log(`${item} - ${this[item]}`)
            }

        }
        // console.log(
        //     `
        //     driver : ${this.driver?.name}
        //     model: ${this.model}
        //     producer: ${this.producer}
        //     production years: ${this.yearProduction}
        //     max speed: ${this.maxSpeed}
        //     engine car: ${this.engine}
        // `
        // );
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;

    };
    this.changeYear = function (newValue) {
        this.yearProduction = newValue;

    };
    this.addDriver = function (driver) {
            this.driver = driver;
    };

}

let car = new Car('Volvo', 'Sweden', 2007, 260, 2.4);

const driver = {
    name: 'Kolya',
    age: 30
}

car.increaseMaxSpeed(20);
car.changeYear(2010);
car.addDriver(driver)
// car.info();
console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class SuperCar extends Car {
//     constructor(model, producer, yearProduction, maxSpeed, engine) {
//         super(model, producer, yearProduction, maxSpeed, engine);
//     }
// }
//
// let superCar = new SuperCar('Volvo', 'Sweden', 2007, 260, 2.4);
// console.log(superCar)
// const driver = {
//     name: 'Vasya',
//     age: 30
// }
//
// superCar.increaseMaxSpeed(30);
// superCar.changeYear(2015);
// superCar.addDriver(driver)
// superCar.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// const cinderellas = [
//     new Cinderella('Tanya', 25, 34),
//     new Cinderella('Sveta', 26, 42),
//     new Cinderella('Katya', 28, 41),
//     new Cinderella('Ivanka', 23, 40),
//     new Cinderella('Ulyana', 26, 39),
//     new Cinderella('Oksana', 30, 38),
//     new Cinderella('Natalya', 29, 37),
//     new Cinderella('Elena', 21, 33),
//     new Cinderella('Olya', 19, 35),
//     new Cinderella('Vika', 35, 36)
// ];
//
// class Prince {
//     constructor(name, age, shoesFind) {
//         this.name = name;
//         this.age = age;
//         this.shoesFind = shoesFind;
//     }
// }
//
// const prince = new Prince('Kolya', 30, 36);
//
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.shoesFind) {
//          console.log(cinderella)
//     }
// }
//
// const cinderella = cinderellas.find(cinderella => cinderella.footSize === prince.shoesFind);
// console.log(cinderella);

//                                                  additional

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// function UserObject(id, name, userName, email, address = {}, phone, website, company = {}) {
//     this.id = id;
//     this.name = name;
//     this.userName = userName;
//     this.email = email;
//     this.pnone = phone;
//     this.website = website;
//     this.address = address;
//     this.company = company;
//
// }
//
// function UserAddress(street, suite, city, zipcode, geo = {}) {
//     this.street = street;
//     this.suite = suite;
//     this.city = city;
//     this.zipcode = zipcode;
//     this.geo = geo;
//
// }
//
// function UserGeo(lat, lng) {
//     this.lat = lat;
//     this.lng = lng;
// }
//
// function UserCompany(companyName, catchphrase, bs) {
//     this.companyName = companyName;
//     this.catchphrase = catchphrase;
//     this.bs = bs;
// }
//
// let userGeo = new UserGeo('-37.3159', '81.1496');
// let userAddress = new UserAddress('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',userGeo);
// let userCompany = new UserCompany('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
//
// let userObject = new UserObject(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', userAddress,'1-770-736-8031 x56442', 'hildegard.org',userCompany);
// console.log(userObject)
//
//
//{
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// function DescriptionTag(title, description, attrs = []) {
//     this.title = title;
//     this.description = description;
//     this.attrs = attrs;
// }
//
// function Attribute(title, description) {
//     this.title = title;
//     this.description = description;
// }
//
// let attrHref = new Attribute('href', 'Вказує адресу документа, який слід перейти.');
// let attrTarget = new Attribute('target', 'Ім`я вікна або кадру, куди браузер завантажуватиме документ.');
//
// let tagA = new DescriptionTag('a', 'Создаёт гипертекстовые ссылки.', [attrHref, attrTarget]);
// console.log(tagA);
//
// let attrClass = new Attribute('class', 'в основному, використовується для вказівки на клас в каскадній таблиці стилів (CSS).');
// let attrId = new Attribute('id', 'використовується для вказівки унікального ідентифікатора HTML елемента.');
//
// let tagDiv = new DescriptionTag('div', ' є універсальним блоковим елементом і призначений для групування елементів документа з метою зміни виду вмісту через стилі.', [attrClass, attrId]);
// console.log(tagDiv);
//
// let tagH1 = new DescriptionTag('h1', 'є найважливішим заголовком першого рівня,', [attrClass, attrId]);
// console.log(tagH1);
//
// let tagSpan = new DescriptionTag('span', 'Універсальний рядковий елемент < span> (від англ. span — охоплювати) призначений ' +
//     'для виділення окремих рядків, символів або інших малих елементів для подальшої зміни їх оформлення за допомогою стилів.', [attrClass, attrId]);
// console.log(tagSpan);
//
// let attrName = new Attribute('name', 'Задает имя элемента ');
// let attrSrc = new Attribute('src', 'Указывает URL-адрес изображения для использования в качестве кнопки отправки');
//
// let tagInput = new DescriptionTag('input', 'определяет поле ввода, в которое пользователь может вводить данные.', [attrName, attrSrc]);
// console.log(tagInput);
//
// let attrAction = new Attribute('action', 'Адреса програми або документа, який обробляє дані форми');
// let attrTargetForm = new Attribute('action', 'Ім`я вікна або кадру , куди обробник завантажуватиме результат, що повертається.');
//
// let tagForm = new DescriptionTag('form', 'встановлює форму на веб-сторінці.', [attrAction, attrTargetForm]);
// console.log(tagForm);
//
// let attrValue = new Attribute('value', 'Значення пункту списку, яке буде надіслано на сервер або прочитано за допомогою скриптів.');
// let attrSelected = new Attribute('selected', 'Заздалегідь встановлює певний пункт списку виділеним.');
//
// let tagOption = new DescriptionTag('option', 'визначає окремі пункти списку, створюваного за допомогою контейнера `<select>`.', [attrValue, attrSelected]);
// console.log(tagOption);
//
// let attrForm = new Attribute('form','Пов`язує список із формою.');
// let attrSize = new Attribute('size','Кількість рядків списку, що відображаються.');
//
// let tagSelect = new DescriptionTag('select', 'дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором.', [attrForm, attrSize]);
// console.log(tagSelect);

// function UserCard(key, balance = 100, transactionLimit = 100, historyLogs = []) {
//     const addHistory = (operationType, credits) => {
//         let timeOperation = new Date().toLocaleTimeString();
//         let dayOperation = new Date().toLocaleDateString('en-US');
//         historyLogs.push({operationType, credits, operationTime: {timeOperation, dayOperation}})
//
//     }
//     return {
//
//         getCardOptions: () => {
//             return {
//                 key,
//                 balance,
//                 transactionLimit,
//                 historyLogs
//             }
//         },
//
//         putCredits: (credit) => {
//             balance += credit;
//             addHistory('Received credits', credit);
//         },
//
//         takeCredits: (credit) => {
//             if (credit <= balance && credit <= transactionLimit) {
//                 balance -= credit;
//             } else {
//                 console.error('Перевищений ліміт, або недостатньо коштів. Будь-ласка поповніть Ваш рахунок')
//             }
//         },
//
//         setTransactionLimit: (limit) => {
//             transactionLimit = limit;
//             addHistory('Transaction limit change', limit);
//         },
//
//         transferCredits: (credit, card) => {
//             if (credit * 1.05 <= balance && credit * 1.05 <= transactionLimit) {
//                 balance -= credit * 1.05;
//                 card.putCredits(credit);
//                 addHistory('Withdrawal of credits', credit);
//             } else {
//                 console.error('Перевищений ліміт, або недостатньо коштів. Будь-ласка поповніть Ваш рахунок')
//             }
//         }
//     }
// }
//
// class UserAccount {
//     constructor(name) {
//         this.name = name;
//         this.cards = [];
//     }
//
//     addCard() {
//         const cardsNumber = this.cards.length;
//         if (cardsNumber === 3) {
//             console.error('Максимальна кількість карток')
//         }
//         this.cards.push(UserCard(cardsNumber + 1));
//     }
//
//     getCardByKey(cardKey) {
//         if (cardKey > 2 || cardKey < 0) {
//             console.error('Ви ввели не вірний номер картки!')
//         }
//         return this.cards.find(card => card.getCardOptions().key === cardKey);
//     }
// }
//
// let user = new UserAccount('Вася');
// user.addCard();
// user.addCard();
//
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
//
// card1.putCredits(500);
// card1.setTransactionLimit(600);
// card1.transferCredits(400, card2);
// card2.takeCredits(100);
//
// console.log(card1.getCardOptions());
// console.log(card2.getCardOptions());
