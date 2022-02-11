/*=======================Lection block=========================*/
// reduce splice flat
//Event Loop

const arrMatrix = [1, 2, 3, [2, [true, false, true], 5, 4], 'ret', 4, 'bob']
const flat = arrMatrix.flat(7)
console.log(flat)

let cars = ['bmw', 'lada', 'renault', 'opel', 'gmc', 'toyota']
let strings = cars.splice(1, 2, 'ford', 'audi')
console.log(strings)

// const numbers = [1, 5, 23, 1, 6, 7, 45, 32, 1, 8, 0]
// numbers.reduce((acc, value) => {
//     console.log(acc, 'acc')
//     console.log(value, 'value')
//     console.log('_______________________')
//     return acc + value
// })

let users = [
    {name: 'Alex', age: 20},
    {name: 'Bob', age: 30},
    {name: 'Vicki', age: 30},
    {name: 'John', age: 20},
]
let reduce = users.reduce((acc2, value2) => {
    return acc2 + value2.age
}, 0)
console.log(reduce)

let reduce2 = cars.reduce((acc, name) => {
    const speed = Math.random() * 200
    if (speed < 150)
        return acc
    const auto = {
        name,
        speed,
        coupe: true
    }
    acc.push(auto)
    return acc
}, [])

console.log(reduce2)

//Event Loop examples
setTimeout(() => {
    console.log(1)
}, 2000)

console.log(2)

setTimeout(() => {
    console.log(3)
}, 500)

let elementById = document.getElementById('btn')
console.log(elementById)

elementById.onclick = () => {
    console.log('CLICK')
}
let i = 0
while (i < 9999999999) {
    i++
}