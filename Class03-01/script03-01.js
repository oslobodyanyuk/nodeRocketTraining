let a = 20

// var b = 10

/**
 This is function description
 @private
 @param carPrice
 */
function buyCar(carPrice) {
    return carPrice + 2
}

console.log(buyCar(3))

// declarations

function declarations() {
    console.log('function declarations')
}

// expressions

const expression = () => {
    console.log('NO HOISTING')
    console.log('THIS REFERENCE')
    console.log('NO ARGUMENTS')
}

function sumator(a, b) {
    return a + b
}

let sumatorExp = (x, y) => {
    return x + y
}
let sumatorExp2 = (x, y) => x + y

let sumatorExp1 = sumatorExp(5, 5)
let sumatorExp2Res = sumatorExp2(3, 3)

console.log(sumatorExp1)
console.log(sumatorExp2Res)

function argLogger() {
    console.log(arguments[2])
    console.log('TEST')
    for (let arg of arguments)
        console.log(arg)
}

argLogger([], 2, 34, 343, 34, 343, 434, 'ff')

/*=======================HW=========================*/
console.log('HW starts')

/**
 1) створити функцію яка приймає масив та виводить його
 * @since 01/30/2022
 * @param {Number} mas
 */
console.log('\nTASK 01')
console.log('Output array elements')

function printArrayElements(mas) {
    for (let masI in mas)
        console.log(mas[masI])
}

let arr = [1, 2, 4, 6, true, 'ffff', NaN]
printArrayElements(arr)

/**
 * 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
 * @since 01/30/2022
 * @param count Number or array items
 * @param maxRange Max range for generating random array members
 * @return {Array} arr Array of numbers from 0 to MaxRange
 *  */
console.log('\nTASK 02')
console.log('Generate and output array elements')

let generateArray = (count, maxRange) => {
    let arr = Array(count).fill().map(() => Math.round(Math.random() * maxRange))
    console.log(arr)
    return arr
}
generateArray(10, 50)
// function func02(count, max) {
//     let arr = Array(count).fill().map(() => Math.round(Math.random() * max))
//     func01(arr)
// }

// func02(10, 50)


/**
 3) створити функцію яка приймає три числа та виводить найменше. (Без Math.min!).
 * @since 01/30/2022
 * @param {Number} a 1st number
 * @param {Number} b 2nd number
 * @param {Number} c 3rd number
 * @return {Number} min from 3 numbers
 */
console.log('\nTASK 03')
console.log('Arrow function expressions type')

let min = (a, b, c) => {
    return (a < b && a < c) ? a : (b < a && b < c) ? b : c
}

console.log(min(5, 3, 4))

console.log('\nCommon type')

function func03(a, b, c) {
    return (a < b && a < c) ? a : (b < a && b < c) ? b : c
}

console.log(func03(4, 5, 2))


/**
 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
 * @since 01/30/2022
 * @param {Number} a 1st number
 * @param {Number} b 2nd number
 * @param {Number} c 3rd number
 * @return {Number} Max of 3 numbers
 */
console.log('\nTASK 04')
console.log('Arrow function expressions type')

let max = (a, b, c) => {
    return (a > b && a > c) ? a : (b > a && b > c) ? b : c
}

console.log(max(4, 5, 2))

/**
 5) створити функцію яка повертає найбільше число з масиву
 * @since 01/30/2022
 * @param {Array} arr Random array of numbers
 * @return {Number} Max array item
 */
console.log('\nTASK 05')
console.log('Max array element with arrow function expressions type')

function arrayMax(arr) {
    return arr.reduce(function (p, v) {
        return (p > v ? p : v);
    });
}

console.log(arrayMax(generateArray(4, 15, 2)))

/**
 6) створити функцію яка повертає найменьше число з масиву
 * @since 01/30/2022
 * @param {Array} arr Random array of numbers
 * @return {Number} Min array item
 */
console.log('\nTASK 06')
console.log('Min array element with arrow function expressions type')

function arrayMin(arr) {
    return arr.reduce(function (p, v) {
        return (p < v ? p : v);
    });
}

console.log(arrayMin(generateArray(4, 5)))

/**
 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
 * @since 01/30/2022
 * @param {Array} arr Random array of numbers
 * @return {Number} Sum of array items
 */
console.log('\nTASK 07')
console.log('Get sum of array elements')

function getSumElements(arr) {
    return arr.reduce(function (p, v) {
        return p + v;
    });
}

console.log(getSumElements(generateArray(4, 10)))

/**
 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
 * @since 01/30/2022
 * @param {Number} n Array length
 * @param {Number} Max Max range for generating random array members
 * @return {Number} Min array item
 */
console.log('\nTASK 08')
console.log('Get average of array elements')

function getAverageElements(arr) {
    return arr.reduce(function (p, v) {
        return p + v;
    }) / arr.length;
}

console.log(getAverageElements(generateArray(10, 5)))

/**
 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
 EXAMPLE:
 [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
 * @since 01/30/2022
 * @param {[Object]} ObjArray Array
 * @return {[Object.keys]} Keys of array items
 */
console.log('\nTASK 09')
console.log('Print of array elements names')

function printArrayNames(objArr) {
    console.log(objArr.map(a => Object.keys(a)))
}

let objArray = [{name: 'Dima', age: 13}, {model: 'Camry'}, {armor: 'kevlar', ammo: 7.62, transport: true}]
printArrayNames(objArray)

/**
 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
 EXAMPLE:
 [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
 * @since 01/30/2022
 * @param {[Object]} ObjArray Array from previous task
 * @return {[Object.values]} Values of array items
 */
console.log('\nTASK 10')
console.log('Print of array elements value')

function printArrayValues(objArr) {
    console.log(objArr.map(a => Object.values(a)))
}

printArrayValues(objArray)

/**
 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
 EXAMPLE:
 [1,2,3,4]
 [2,3,4,5]
 результат
 [3,5,7,9]
 * @since 01/31/2022
 * @param {[Array]} Matrix Array from previous task
 * @return {[Array]} Vector with sums of matrix column items
 */
console.log('\nTASK 11')
console.log('Add matrix elements value with the same column index')

function addArrayColumns(arrMatrix) {
    return arrMatrix.reduce((a, b) => // replaces two elements in array by sum of them
        a.map((x, i) =>             // for every `a` element returns...
                x +                      // its value and...
                (b[i] || 0)              // corresponding element of `b`,
            // if exists; otherwise 0
        )
    )
}

let matrix =
    [
        [1, 2, 3, 4],
        [2, 3, 5],
        [1, 1, 1, 1],
        [1, 3]
    ]
console.log(addArrayColumns(matrix))

/**
 Bonus track.
 Дано список імен.
 let n1 = '    Harry       Potter      '
 let n2 = '    Ron       Whisley      '
 let n3 = '    Hermione       Granger      '
 Написати функцію, яка приймає будь яке не валідне ім'я, та нормалізує його в наступний вигляд
 let n1 = 'Harry Potter'
 let n2 = 'Ron Whisley'
 let n3 = 'Hermione Granger'.
 * @since 01/31/2022
 * @param {[Array]} String rows with errors
 * @return {[Array]} Corrected string rows without errors
 */
console.log('\nEXTRA TASK')
console.log('Delete extra spaces from string')

function clearString(str) {
    console.log(str.replace(/\s+/g, ' ').trim())
}

let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
clearString(n1)
clearString(n2)
clearString(n3)