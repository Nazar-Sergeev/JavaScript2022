// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b) {
//     return a * b;
// }
// console.log(square(4, 8));
//
// const squareArrowFn = (a, b) => a * b;
// console.log(squareArrowFn(4, 8));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareRadius(r) {
//     let pi = 3.14;
//     return (r * r) * pi;
// }
// console.log(squareRadius( 4));
//
// const squareArrowFn = (pi, r) => (r * r) * pi;
// console.log(squareArrowFn(3.14, 4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function square(r, h) {
//     let pi = 3.14;
//     return 2 * pi * r * h;
// }
//
// const squareArrowFn = (pi, r, h) => 2 * pi * r * h;

// - створити функцію яка приймає масив та виводить кожен його елемент
// const users = [
//     {name: 'БЕДУХА', age:'30  status: true },
//     {name: 'ИВАН', age:'30СКИЙ', status:false },
//     {name: 'АНТОН', age:'30О', ', status: true},
//     {name:'ЮРИЙ' , age:'30, status: false},
//     {name: 'ИГОРЬ', age:'30 , status: true},
//     {name: 'ГЛІБ', age:'30', ', status: true},
//     {name: 'СЕРГЕЙ', age:'30,  status:true },
//     {name: 'ВЛАДИСЛАВ', age:'30,  status:true },
//     {name: 'АНТОН', age:'30ІБ', status:true },
//     {name: 'РУСЛАН', age:'30В',  status: false},
//     {name: 'АЛЕКСАНДР', age:'30  status:true },
// ];
// const showArray = (array) => {
//     for (const item of array) {
//         console.log(item)
//     }
// };
//
// showArray(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const creatorTag = (text) => {
//     document.write(`<p>${text}</p>`);
// };
// creatorTag('Hello World');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const creatorTag = (text) => {
//     document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// };
// creatorTag('Hello okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const creatorTag = (text, size) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// };
// creatorTag('Hello World', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let something = [152, true, 'hello', 568, false, 'okten', 42, 73];
//
// const buildsList = (array) => {
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// };
// buildsList(something);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const users = [
//     {id: 1, name: 'КИРИЛО', age: 30},
//     {id: 2, name: 'ІВАН', age: 32},
//     {id: 3, name: 'АНТОН', age: 35},
//     {id: 4, name: 'ЮРІЙ', age: 28},
//     {id: 5, name: 'ІГОР', age: 25},
//     {id: 6, name: 'ГЛІБ', age: 37},
//     {id: 7, name: 'СЕРГІЙ', age: 23},
//     {id: 8, name: 'ВЛАДИСЛАВ', age: 36},
//     {id: 9, name: 'АНТОН', age: 30},
//     {id: 10, name: 'РУСЛАН', age: 28},
//     {id: 11, name: 'ОЛЕКСАНДР', age: 20}
// ];
// const creatorDocumentWrite = (array) => {
//     for (const item of array) {
//         document.write(`<div>
//              <h3>${item.id}. Name: ${item.name}</h3>
//              <h3>Age: ${item.age}</h3>
//          </div>`)
//
//     }
// };
//
// creatorDocumentWrite(users);

// - створити функцію яка повертає найменьше число з масиву
// let numbers = [ 10, 8, 7, 9, 3, 8, 98, 73, 8, 67];
//
// const returnMinNumber = (numbers) => {
//     let min = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i];
//         }
//     }
// };
//
// returnMinNumber(numbers)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let numbers = [ 10, 8, 7, 9, 3, 8, 98, 73, 8, 67];
// const sumNumbers = (array) => {
//     let sum = 0;
//     for (const number of array) {
//         sum +=number
//     }
//     console.log(sum);
// };
// sumNumbers(numbers);


//                                                       additional


// - Дано натуральное число n. Выведите все числа от 1 до n.
// const returnNumber = (number) => {
//     for (let i =1; i <= number; i++) {
//         console.log(i)
//     }
// };
// returnNumber(10)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания если A < B, или в порядке убывания в противном случае.
// const returnNumber = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// };
//
// returnNumber(1, 8);
//
// returnNumber(10, 1);

// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// const swapsFn = (array, number) => {
//     let index = array[number];
//     array[number] = array[number + 1];
//     array[number + 1] = index;
//     console.log(array);
// };
//
// swapsFn([9, 8, 0, 4], 1);

// - Створити функцію яка буде переносити елементи зі значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
// Довжина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
const array = [0, 1, 0, 0, 0, 1, 0, 6, 0, 3, 0, 1, 2, 3, 4];
const newArray = [];

const transfer = (array) => {
    let countZero = 0; 
    let index = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            countZero++;  // Рахуємо скільки в масиві є нулів
        } else {
            newArray[index++] = array[i]; // Залишаємо всі елементи масиву крім "0"
        }
    }

    let addZero = newArray.length;
    for (let i = 0; i < countZero; i++) {     
        newArray[addZero++] = 0;  // Додаємо "0" в масив
    }
    return newArray;
};

transfer(array);
console.log(newArray);
