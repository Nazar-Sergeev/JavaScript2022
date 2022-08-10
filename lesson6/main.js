// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is 
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// 
// let str1UpperCase = str1.toUpperCase();
// let str2UpperCase = str2.toUpperCase();
// let str3UpperCase = str3.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
//
// let str1LowerCase = str1.toLowerCase();
// let str2LowerCase = str2.toLowerCase();
// let str3LowerCase = str3.toLowerCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
//
// let clearString = str.trim();

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
//
// let stringToArray = (string) => string.split(' ');
// stringToArray(str);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arrayNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let mapedNumbers = arrayNumbers.map(number => '' + number);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11, 21, 3];
//
// let sortNums = (array, direction) => {
//     return array.sort((n1, n2) => {
//         if (direction) {
//             return n1 - n2;
//         } else {
//             return n2 - n1;
//         }
//     })
// };
//
// sortNums(nums, 1);

// - є масив
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// -- відсортувати його за спаданням за monthDuration
// let sortCourseDuration = coursesAndDurationArray.sort((c1, c2) => {
//     if (c1.monthDuration < c2.monthDuration) {
//         return 1;
//     }
//     if (c1.monthDuration > c2.monthDuration) {
//         return -1;
//     }
//     if (c1.monthDuration === c2.monthDuration) {
//         return 0;
//     }
// });
//
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let courseMoreFiveMouth = coursesAndDurationArray.filter(course => course.monthDuration > 5);

// let playingCard = [
//     {carsdSuit: 'spade', value: '6', color: 'black'},
//     {carsdSuit: 'diamond', value: '6', color: 'red'},
//     {carsdSuit: 'heart', value: '6', color: 'red'},
//     {carsdSuit: 'clubs', value: '6', color: 'black'},
//     {carsdSuit: 'spade', value: '7', color: 'black'},
//     {carsdSuit: 'diamond', value: '7', color: 'red'},
//     {carsdSuit: 'heart', value: '7', color: 'red'},
//     {carsdSuit: 'clubs', value: '7', color: 'black'},
//     {carsdSuit: 'spade', value: '8', color: 'black'},
//     {carsdSuit: 'diamond', value: '8', color: 'red'},
//     {carsdSuit: 'heart', value: '8', color: 'red'},
//     {carsdSuit: 'clubs', value: '8', color: 'black'},
//     {carsdSuit: 'spade', value: '9', color: 'black'},
//     {carsdSuit: 'diamond', value: '9', color: 'red'},
//     {carsdSuit: 'heart', value: '9', color: 'red'},
//     {carsdSuit: 'clubs', value: '9', color: 'black'},
//     {carsdSuit: 'spade', value: '10', color: 'black'},
//     {carsdSuit: 'diamond', value: '10', color: 'red'},
//     {carsdSuit: 'heart', value: '10', color: 'red'},
//     {carsdSuit: 'clubs', value: '10', color: 'black'},
//     {carsdSuit: 'spade', value: 'jack', color: 'black'},
//     {carsdSuit: 'diamond', value: 'jack', color: 'red'},
//     {carsdSuit: 'heart', value: 'jack', color: 'red'},
//     {carsdSuit: 'clubs', value: 'jack', color: 'black'},
//     {carsdSuit: 'spade', value: 'queen', color: 'black'},
//     {carsdSuit: 'diamond', value: 'queen', color: 'red'},
//     {carsdSuit: 'heart', value: 'queen', color: 'red'},
//     {carsdSuit: 'clubs', value: 'queen', color: 'black'},
//     {carsdSuit: 'spade', value: 'king', color: 'black'},
//     {carsdSuit: 'diamond', value: 'king', color: 'red'},
//     {carsdSuit: 'heart', value: 'king', color: 'red'},
//     {carsdSuit: 'clubs', value: 'king', color: 'black'},
//     {carsdSuit: 'spade', value: 'ace', color: 'black'},
//     {carsdSuit: 'diamond', value: 'ace', color: 'red'},
//     {carsdSuit: 'heart', value: 'ace', color: 'red'},
//     {carsdSuit: 'clubs', value: 'ace', color: 'black'},
//     {value: 'joker', color: 'red'},
//     {value: 'joker', color: 'black'},
//
// ];
// описати колоду карт
//
// - знайти піковий туз
// let findAceSpade = playingCard.find(card => card.carsdSuit === 'spade' && card.value === 'ace');
//
// - всі шістки
// let cardsSix = playingCard.filter(card => card.value === '6');
//
// - всі червоні карти
// let cardsRedColor = playingCard.filter(card => card.color === 'red');
//
// - всі буби
// let diamondCards = playingCard.filter(card => card.carsdSuit === 'diamond');
//
// - всі трефи від 9 та більше
// let cardsMoreNine = playingCard.filter((card) => {
//     if (card.value > '9' && card.carsdSuit === 'clubs') {
//         return card;
//     }
//     if (card.value === '10' && card.carsdSuit === 'clubs') {
//         return card;
//     }
// });
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
// let reducer = playingCard.reduce((previousValue, card) => {
//     if (card.carsdSuit === 'spade') {
//         previousValue.spades.push(card);
//     }
//     if (card.carsdSuit === 'diamond') {
//         previousValue.diamonds.push(card);
//     }
//     if (card.carsdSuit === 'heart') {
//         previousValue.hearts.push(card);
//     }
//     if (card.carsdSuit === 'clubs') {
//         previousValue.clubs.push(card);
//     }
//     return previousValue;
//
// },{spades: [], diamonds:[], hearts:[], clubs: []})
// console.log(reducer);


// Додаткову зроблю, просто кидаю на перевірку цікаво чи все норм))





//                                                      additional

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масивlet coursesArray = [
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
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню