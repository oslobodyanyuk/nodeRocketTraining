/*=======================Lection block=========================*/
// 0:02:00 String Methods
// 0:18:00 Spread (rest)
// 0:48:00 Array methods

// let str = 'Hello World';
//
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
//
//
// // console.log('Karina' === 'Karina')
//
// let dealerId = '  Harry      Potter   ';
// // 'Harry Potter'
// console.log(dealerId);
// console.log(dealerId.trim());
//
// // const names = 'Ira;Volodya;Dima;Karina';
// //
// // let strings = names.split(';');
// // console.log(strings);
//
//
// // const numbers = [2, 5, 1, 11, 28, 3, 88, 91, 975, 11778];
// let girls = ['Ira', 'Karina', 'Tanya', 'Julia', 'Anna', 'Angelika'];
//
// let s = girls.join(', ');
//
// console.log(s);
//
// const text = 'Привіт, я Віктор. Буду вчити вас JS. Бо JS найкращий.';
//
// let b = text.includes('JS');
//
// console.log(b);
//
// let s1 = text.replaceAll('JS', 'програмування');
//
// console.log(s1);
//

// const numbers = [2, 5, 1, 999999999, 28, 3, 88, 91, 975, 11778];
// let girls = ['Ira', 'Karina', 'Tanya', 'Julia', 'Anna', 'Angelika'];
// const user = {
//   name: 'Viktor', // +
//   age: 26,
//   car: true,
//   bike: true,
//   phone: 'Samsung', // +
//   job: {
//     title: 'Senior'
//   }
// }
//
// // const ira = girls[0];
// // const karina = girls[1];
// // const tanya = girls[2];
//
// const [irinka, karina, ...rest] = girls;
//
// // console.log(karina);
//
// console.log(rest)
//
// const name = 'Khrysyna';
//
// const { name: userName, phone, ...other } = user;
//
// console.log(name, phone);
// console.log(userName);
//
// console.log(other);
//
//
// const extededUser = { ...user };
//
// extededUser.phone = 'Redmi';
// extededUser.job.title = 'Junior';
//
// console.log(extededUser);
// console.log(user);


const numbers = [2, 5, 1, 999999999, 28, 3, 88, 91, 975, 11778];
const girls = ['Ira', 'Karina', 'Tanya', 'Julia', 'Anna', 'Angelika'];

// numbers.sort((a, b) => {
//   console.log(a, 'a')
//   console.log(b, 'b')
//   console.log('________________________')
//
//   return a - b;
// });
//
// girls.sort((a, b) => {
//   if (a > b) {
//     return -1
//   }
//
//   return 1
// })
//
// // console.log(numbers);
// console.log(girls);

// let filter = girls.filter(girl => girl.startsWith('A'));
//
// console.log(filter);
// console.log(girls);
//
// let numbers1 = numbers.filter((number, index, arra) => {
//   console.log(number, 'value');
//   console.log(index, 'index');
//   console.log(arra, 'array');
//   console.log('_______________');
//
//   if (number % 2 === 0) {
//     return true
//   }
// });
//
// console.log(numbers1);

// girls.forEach(value => {
//   if (value.startsWith('A')) {
//     return;
//   }
//
//   console.log(value);
// })

// let fate = girls.find(girl => girl.startsWith('A'));
// let destiny = girls.findIndex(girl => girl.startsWith('A'));
// console.log(fate);
// console.log(destiny);
//
// let some = girls.some(girl => girl.includes('a'));
// let every = girls.every(girl => girl.includes('a'));
//
// let some2 = numbers.some(number => number > 20);
// let every2 = numbers.every(number => number > 20);
//
// console.log(some, 'some');
// console.log(every, 'every');
// console.log(some2, 'some2');
// console.log(every2, 'every2');

// const map = girls.map(function (value) {
//   if (value.length < 5) {
//     return value + ' good girl';
//   }
//
//   return value;
// });

// const map = girls.map((name, index) => {
//   const age = Math.random() * 25
//
//   user.age = 22;
//
//   return {
//     name: name,
//     id: index + 1,
//     age,
//     man: age > 18
//   }
// });
//
// console.log(map);


const user = {
    name: 'Viktor',
    age: 26,
    car: true,
    bike: true,
    phone: 'Samsung',
    job: {
        title: 'Senior'
    }
}

// user['name'] => user.name
// user['age'] => user.age

function getUserValue(keyName) {
    return user[keyName];
}

const userName = getUserValue('name');
const userAge = getUserValue('age');

console.log(userName);
console.log(userAge);

// TODO reduce splice flat