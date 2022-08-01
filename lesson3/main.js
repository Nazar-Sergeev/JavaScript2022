// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt('enter the number');
//
// if (x !== 0) {
//     console.log('Вірно');
// }else {
//     console.log('Не вірно!!!')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('enter a number from 0 to 59');
//
// if (time >= 0 && time <= 15) {
//     console.log('first quarter');
// }else if (time >= 16 && time < 30) {
//     console.log('second quarter');
// }else if (time >= 31 && time <= 45) {
//     console.log('third quarter');
// }else if (time >= 46 && time <= 59) {
//     console.log('fourth quarter');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('enter a number from 1 to 31');
//
// if (day === 1 || day <= 10) {
//     console.log('one');
// }else if (day === 11 || day <= 21) {
//     console.log('two');
// }else if (day === 22 || day <= 31) {
//     console.log('three');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
//   інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let dayWeek = +prompt('enter the day of the week')
//
// switch (dayWeek) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('WTF????????')
// }

// - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//
// let n1 = +prompt('enter the number 1');
// let n2 = +prompt('enter the number 2')
//
// if (n1 > n2 ) {
//     console.log(n1);
// }else if (n2 > n1) {
//     console.log(n2);
// }else if (n1 === n2) {
//     console.log(`${n1} and ${n2} equal numbers`);
// }

//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//  (хибноподыбне, тобто кастується до false)
//
// let x = prompt('enter the....') || 'default';
// console.log(x);

                                                                              //additional

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >= 3) {
//     console.log('великий масив');
// } else {
//     console.log('маленький масив');
// }

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
// let a = 1;
// let b = 2;
//
// let result = (a + b < 4) ? 'Мало' : 'Багато';
// console.log(result);

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//
// let a = +prompt('enter num');
//
// let num = (a >= -100 && a < 0) ? '----' : (a === 0) ? 'nol' : (a > 0) ? '++++' : 'WHF';
//
// console.log(num);

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
//let test = prompt('enter the text');
//
// if (test) {
//     console.log('вірно');
// } else {
//     console.log('Не вірно');
// }
//
// let result = (test) ? 'вірно' : 'Не вірно';
// console.log(result);

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let answer = prompt('Яка «офіційна» назва JavaScript?');
//
// if (answer === 'ECMAScript') {
//     console.log('Правильно!');
// } else {
//     console.log('Не знаєте? ECMAScript!')
// }

//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
// let flat = +prompt('enter apartment number');
//
// if (flat >= 1 && flat < 20) {
//     console.log('ENTRANCE FIRST');
// }else if (flat >= 21 && flat < 48) {
//     console.log('ENTRANCE SECOND');
// }else if (flat >= 49 && flat < 90) {
//     console.log('ENTRANCE THIRD');
// }

// - Ми маємо змінну number в яку користувач задає числове значення, якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// let number = +prompt('enter number');
//
// number === 10 ? console.log('ВІРНО') : console.log('НЕВІРНО');
//
// // if (number === 10) {
// //     console.log('ВІРНО');
// // } else {
// //     console.log('НЕВІРНО');
// // }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let temperature = prompt('what is the temperature outside?');
//
// if (temperature >= 10 && temperature < 22) {
//     alert('ми йдемо ВЧИТИСЯ');
// } else {
//     alert('сидимо вдома і вчимося ОНЛАЙН');
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
//
// let number = +prompt('enter number');
//
// switch (number) {
//     case 1:
//         console.log('AUTO');
//         break;
//     case 2:
//         console.log('MOTO');
//         break;
//     case 3:
//         console.log('IPHONE');
//         break;
//     case 4:
//         console.log('APARTMENT');
//         break;
//     case 5:
//         console.log('PEN');
//         break;
//     default:
//         console.log(`${number} - не вірне`)
// }