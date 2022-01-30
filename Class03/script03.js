console.log('=========================Lection block========================')
const user = {
    name: 'Alex',
    white: true,
    age: 39
}
let keys = Object.keys(user)
console.log(keys)
let values = Object.values(user)
console.log(values)
let entries = Object.entries(user)
console.log(entries)
if (Object.values(user).length)
    console.log('Not empty!')

let obj = {
    name: 'Bob',
    age: 30,
    payment: NaN,
    girl: true,
    job: null
}
console.log(obj)
const jsonObj = JSON.stringify(obj)
console.log(jsonObj)
console.log(typeof jsonObj)

const parsedObj = JSON.parse(jsonObj)
console.log(parsedObj)
parsedObj.age = 100
console.log(parsedObj)

function fn01() {
    const userName = 'Hello'
    console.log('Hello', userName)
}

fn01()

function sendSMS(userNames) {
    for (i = 0; i < userNames.length; i++)
        console.log(userNames[i])
}

let users = [12, 32, 44, 66, 22]
sendSMS(users)
