
//                                                    LESSON 6

//                                            МЕТОДИ СТРІНГИ
//
// let str = 'hello';
// let concat = str.concat('!!!');//  Додає до стрінги значення вказане в дужках ---> hello!!!
//
// let upperCase = str.toUpperCase(); // Робить всі символи заглавними буквами ---> HELLO
//
// let lowerCase = str.toLowerCase();// Робить всі символи маленькими буквами ---> hello
//
// let startsWith = str.startsWith('hel');// Шукає з яких символів починається стрінга і повертає TRUE or FALSE
//
// let endWith = str.endsWith('lo');// Шукає з яких символів закінчується стрінга і повертає TRUE or FALSE
//
// let subString = str.substring(0, 3);// Приймає два аргументи. Перший - це стартова позиція (з якою буде обрізатись стрінга). Другий - це кінцева позиція (не включно).
//
// let indexOf = str.indexOf('l');// Шукає під яким індексом знаходиться елемент (виводить тільки перший знайдений елемент) ---> '2'
//
// let indexOfPosition = str.indexOf('l', 3);// Шукає від вказаної позиції --->  '3'
//
// let lastIndexOf = str.lastIndexOf('l');// // Шукає під яким індексом знаходиться елемент у зворотньому напрямку (з кінця на початок стрінги), (виводить тільки перший знайдений елемент)---> '3'
//
// let charAt = str.charAt(1);// Знаходить елемент за індексом ---> 'e'
//
// let replace = str.replace('l','!');// Заміняє літеру 'l' на '!'. Заміняє тільки перше входження. ---> 'he!lo'
//
// let replaceAll = str.replaceAll('l','!');// Заміняє всі літери 'l' на '!'. ---> 'he!!o'
//
// let str2 = 'hello world';
//
// let split = str2.split(' ');// Видаляє за значений елемент і перетворює стрінгу на масив ---> ['hello', 'world]


//                                              МЕТОДИ МАСИВУ
//
//
// let array = [];
//
// Array.isArray(array);// Перевіряє чи це насправді масив ---> true
//
// array.push('new element');// Додає в кінець масиву новий елемент
//
// array.pop();// Вирізає останній елемент масиву (повертає видалиний елемент)
//
// array.unshift('!!!');// Додає новий елемент в початок масиву
//
// array.shift();//Видаляє пеший елемент з масиву
//
// array.join('-');// З'єднує по '-' всі елементи масиву та перетворює на стрінгу
//
// let array2 = [1, 4, 6, 5, 3,];
//
// // let concat = array.concat(array2);// З'єднує два масиви та повертає новий масив --- 'concat'
// //
// // array2.reverse();// Масив у зворотньому положені
// //
// // array2.slice(0, 3);// Вирізає масив з "0" індексу по "3" не включно та повертає новий масив (з вирізаними елементами)
// //
// array2.splice(3, 1);// Видаляє елементи масиву з "0" індексу по "2" і повертає масив видалених елементів
// array2.splice(array2.indexOf(5), 1);// Теж саме тільки ми знайшли індекс елементу за допомоги "array2.indexOf(5)"
//
// // array2.splice(0, 2, 'bla', 'bla', 'bla');// Видаляє "2" елементи масиву з "0" індексу і додає всі вказані елементи
//
// array2.includes(4);// Перевіряє наявність елементу в масиві (так само працює зі стрінгою)


//                                              МЕТОДИ МАСИВУ WITH CALLBACKS
//
//
// let users = [
//     {age: 20, name: 'СЕРГЕЙ', userName: 'БЕДУХА', city: 'Kyiev', status: true},
//     {age: 25, name: 'ИВАН', userName: 'БУЧАКЧИЙСКИЙ', city: 'Lviv', status: false},
//     {age: 33, name: 'АНТОН', userName: 'ВАСИЛЕНКО', city: 'Kherson', status: true},
//     {age: 34, name: 'ЮРИЙ', userName: 'ГУРОВ', city: 'Harkiv', status: false},
//     {age: 19, name: 'ИГОРЬ', userName: 'ДЯНКОВ', city: 'Dnipro', status: true},
//     {age: 17, name: 'ГЛІБ', userName: 'КОВАЛЬОВ', city: 'Vinicya', status: true},
//     {age: 31, name: 'СЕРГЕЙ', userName: 'ЛЯШЕНКО', city: 'Kyiev', status: true},
//     {age: 27, name: 'ВЛАДИСЛАВ', userName: 'СЕМЕНКО', city: 'Kyiev', status: true},
//     {age: 36, name: 'АНТОН', userName: 'ТВЕРДОХЛІБ', city: 'Lviv', status: true},
//     {age: 21, name: 'РУСЛАН', userName: 'ФИЛЬЧАКОВ', city: 'Kyiev', status: false},
//     {age: 24, name: 'АЛЕКСАНДР', userName: 'ХАТЬКО', city: 'Dnipro', status: true},
// ];
//
// users.forEach(function (value, index, array) {
//     console.log(value);// Кожен об'єкт масиву
//     console.log(index);// Індекс елемента масиву
//     console.log(array);// Весь масив
// });
//
// users.forEach(value => console.log(value)); // Те саме Виводить кожен елемент масиву (forEach() - ітератор)
//
// let filteredUsers = users.filter(function (value) {// Фільтрує масив і виводить булеве значення (повертає новий масив)
//     if (value.age > 30) {
//         return value;
//     }
// });
//
// let filteredUsers2 = users.filter(value => value.age > 30);// Те саме Фільтрує масив і виводить булеве значення (повертає новий масив)
//
// let mapedUsers = users.map(function (value, index) {  // Повертає новий об'єкт на основі старого
//     let newUser = {
//         name: value.name,
//         age: value.age,
//         userName: value.userName,
//         status: value.status,
//         id: index + 1 // додаємо новий ключ "id"
//     }
//     return newUser;
//
// });
//
// let mapedUsers2 = users.map((value, index) => { // Те саме тільки стрілочною функцією
//     return {id: index + 1, ...value}; // (...value) - берем всі ключі які є у об'єкта, і додаємо новий ключ "id"
//
// });
//
// let find = users.find(value => value.name === 'СЕРГЕЙ');// Те саме, що і фільтр, але знаходить тільки перше входження
// console.log(find);
//
// users.every(value => value.status);// Перевіряє чи всі status TRUE, якщо хотя би один FALSE, то повернеться FALSE
// users.some(value => value.status);// Перевіряє чи є status TRUE, якщо так то повернеться TRUE (якщо не один немає TRUE, то повернеться FALSE)
//
// let sortAge = users.sort((user1, user2) => {// Сортує юзерів за віком, той хто важчий буде падати в низ масиву (від молодшого до старшого)
//     return user1.age - user2.age
// });
//
// let sortName = users.sort((u1, u2) => { // Сортує юзерів за неймом від А - Я
//     if (u1.name > u2.name) {
//         return 1;
//     }
//     if (u1.name < u2.name) {
//         return -1;
//     }
//     if (u1.name === u2.name) {
//         return 0;
//     }
// });
//                                                                        // 'currentValue' - це кожен юзер
// let reduce = users.reduce((previousValue, currentValue) => { // "previousValue" - значення яке ми хочем бачити (в даному випадку { statusT:[], statusF:[]})
//     if (currentValue.status) {
//         previousValue.statusT.push(currentValue);
//     } else {
//         previousValue.statusF.push(currentValue)
//     }
//     return previousValue;
// }, { statusT:[], statusF:[]});
// console.log(reduce);
//


//                                                          CALLBACK FUNCTION
//
// function filter(array, callbackFn) {
//     let filterArray = []; // Пустий масив для відфільтрованих юзерів
//
//     for (const user of array) {
//         if (callbackFn(user)) {
//             filterArray.push(user);
//         }
//     }
//     return filterArray;
// }
//
// filter(users, (item) => item.status);// Перевіряємо чи status TRUE (item - це і є юзер який приходить з циклу в колбек функцію як аргумент)
//
// function filterAge(user) {
//     return user.age > 30
// }
// filter(users, filterAge);// Те саме тільки функція описана окремо і передана як аргумент (не виклик функції!!!)
