/*=======================Lection block=========================*/
// // Реалізовуємо свій компютерний магазин.
// // ===
// // Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// //   Оперативна память.
// //   Потужність процесора. (цифра від 0 до 1000)
// // Назва.
// //   В кожного компютера має бути метод включання.
// // ===
// // Від базового компютрера треба реалізувати ноутбук.
// //   Він має нову властивість дюймаж монітора.
// //
// //   У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// // ===
// // Від ноутбука потрібно зробити ультрабук.
// //   Він має нову змінну ваги.
// //   При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// // ===
// // Від базвого класу потрібно створити базовий ПК.
// //   В нього має бути новий метод запуску ігор.
// //   Кількість FPS визначається як потужність / опервтивку.
// //   Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// //
// // Компютер можна апгрейдити.
// //   Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// //   Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// //   Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// // ===
// // Від базового ПК необхідно зробити ігровий ПК.
// //   Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// //   При запуску однієї гри потужніть процесора має падати на 0.1%.
// // Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// // що на цьому відрі ігри не запускаються.
//
//
// class Computer {
//   constructor(ram, power, name) {
//     this._ram = ram;
//     this._power = power;
//     this._name = name;
//   }
//
//
//   get ram() {
//     return this._ram;
//   }
//
//   set ram(value) {
//     this._ram = value;
//   }
//
//   get power() {
//     console.log('THIS IS GETTER')
//     return this._power;
//   }
//
//   set power(value) {
//     if (value > 1000 || value < 0) {
//       console.log('Not valid power');
//       return
//     }
//
//     this._power = value;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   set name(value) {
//     this._name = value;
//   }
//
//   powerOn() {
//     console.log('Wroom wroom. I am', this._name);
//   }
// }
//
// class Laptop extends Computer {
//   constructor(ram, power, name, monitor) {
//     super(ram, power, name);
//     this._monitor = monitor;
//     // потужність / (дюйми * оперативку)
//     this.batarey = power / (monitor * ram)
//   }
//
//   get monitor() {
//     return this._monitor;
//   }
//
//   set monitor(value) {
//     this._monitor = value;
//   }
// }
//
// const pentium = new Computer(2, 400, 'Pentium 2');
//
// const lenovo = new Laptop(4, 500, 'ThinkPad', 17);
//
// console.log(lenovo.batarey);
//
// //   Компютер можна апгрейдити.
// //   Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// //   Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// //   Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
//
// class CompCopy {
//   constructor(ram, power, name) {
//     this.ram = ram;
//     this.power = power;
//     this.name = name;
//   }
//
//   upgradePC(newPower) {
//     const isMoreThan10Percent = (newPower * 1.1) > this.power;
//
//     if (isMoreThan10Percent || (newPower < this.power)) {
//       console.log('Power not valid');
//       return
//     }
//
//     this.power = newPower;
//   }
// }


// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100


function zerosToEnd(arr = []) {
    if (!Array.isArray(arr)) {
        console.log('This is not array')
        return;
    }

    let zerosCount = 0
    const result = [];

    for (const number of arr) {

        if (number === 0) {
            zerosCount++;
        } else {
            result.push(number)
        }
    }

    for (let i = 0; i < zerosCount; i++) {
        result.push(0);
    }

    console.log(result);
}

const array = [0, 2, 6, 9, 18, 6, 0, 0, 8, 4, 94];

// zerosToEnd(array)


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// a) за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// b) Додати принцу функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

class Cinderella {
    constructor(name, age, lag) {
        this.name = name
        this.age = age
        this.lag = lag
    }
}

class Prince {
    constructor(name, age, shoesSize) {
        this.name = name
        this.age = age
        this.shoesSize = shoesSize
    }

    findGirlOfDream(girls) {
        if (!Array.isArray(girls)) {
            console.log('Nobody wants you ');
            return;
        }

        for (const girl of girls) {
            if (this.shoesSize === girl.lag) {
                console.log(`${this.name} and ${girl.name} get married`);
                break;
            }
        }
    }
}

const irina = new Cinderella('Ira', 19, 38);
const veronika = new Cinderella('Veronika', 17, 36);
const nastya = new Cinderella('Nastya', 18, 37);
const diana = new Cinderella('Diana', 20, 34);
const viktoria = new Cinderella('Viktoriia', 19, 35);

const cinderellas = [irina, veronika, nastya, diana, viktoria];

const maks = new Prince('Maks', 22, 36);

maks.findGirlOfDream(cinderellas);


function User(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function () {
        console.log('Hello', this.name);
    }
}


const maks2 = new User('Maks', 20);

console.log(maks2);