// const user = {
//     name: 'Alex',
//     age: 39,
//     sayHello: () => {
//         console.log('Hello', user.name)
//     }
// }
// console.log(user.sayHello())
/*

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const user = new User('Bob', 40)
console.log(user)
*/

//Наслідування

class Human {
    constructor(name, age) {
        // super(props);
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log(`Hello. My name is ${this.name}. I am ${this.age} years`)
    }
}


class Programmer extends Human {
    constructor(name, age, skill) {
        super(name, age);
        this.skill = skill;
    }

    codding(hours) {
        console.log(`I am coding on ${this.skill} ${hours} hours per day.`)
    }
}

const alex = new Human('Alex', 39)
const bob = new Programmer('Alex', 39, 'PHP')

alex.greetings()
bob.codding(10)