/*=======================Lection block=========================*/
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

/*class Human {
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
bob.codding(10)*/

/*=======================HW block=========================*/

class Computer {
    constructor(name, ram, speed) {
        this.name = name
        this.memory = ram
        this.productivity = speed
    }

    switching() {
        console.log(`Now switching on ${this.name}`)
    }
}

const computer01 = new Computer('Thinkpad', 32, 99)
const computer02 = new Computer('Dell XPS', 24, 85)
const computer03 = new Computer('HP Ultrabook', 16, 75)
computer01.switching()
computer02.switching()
computer03.switching()

class Laptop extends Computer {
    constructor(name, ram, speed, monitor) {
        super(name, ram, speed);
        this.monitor = monitor
    }

    working_time() {
        return Math.floor(this.productivity / this.monitor * this.memory / 60)
    }
}

const laptop01 = new Laptop('Thinkpad', 32, 99, 14)
console.log('Time for work is ', laptop01.working_time(), ' hours')

class Ultrabook extends Laptop {
    constructor(name, ram, speed, monitor, weight) {
        super(name, ram, speed, monitor)
        this.weight = weight
    }

    switching() {
        if (this.weight > 2 && this.working_time() < 4)
            console.log('System Error. Hendehog!')
        else
            console.log(`Now switching on ${this.name}`)
    }
}

const ultrabook01 = new Ultrabook('X1 carbon', 32, 100, 14, 1)
const ultrabook02 = new Ultrabook('Prestigio', 8, 35, 15.6, 2.5)
ultrabook01.switching()
ultrabook02.switching()

class BasePC extends Computer {
    constructor(name, ram, speed) {
        super(name, ram, speed)
        this.fps = Math.floor(speed / ram)
    }

    runGame(name) {
        console.log('You are playing ', name, ' with ', this.fps, 'FPS')
    }

    speedUp(newSpeed, newRam) {
        if (newSpeed <= 10) {
            this.productivity += newSpeed
            console.log('New speed is ', this.productivity)
        }
        if (newRam > 0)
            this.memoryBasePC *= 2
        console.log('New memory is ', this.memory)
    }
}

const workStation01 = new BasePC('MKS 2213', 8, 60)
workStation01.runGame('Halo')
workStation01.speedUp(4, 1)

class GamePC extends BasePC {
    constructor(name, ram, speed) {

        super(name, ram, speed)
        this.fps = this.fps * 2
    }

    runGame(name) {
        if (this.productivity < 500 && this.memory < 8)
            console.log('Error! Vidro detekted! Come back to Zadrypantsi!')
        else {
            this.fps -= 0.1
            console.log('You are playing ', name, ' with ', this.fps, 'FPS')
        }
    }

}

const gameStation01 = new GamePC('ROG Emperor', 32, 120)
gameStation01.runGame('Duke Nukem')
gameStation01.runGame('Wolf 3D')
gameStation01.runGame('Heuretic')

gameStation01.speedUp(4, 1)

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }

    callCinda() {
        console.log(this.name)
        console.log(this.age)
        console.log(this.footSize)
    }
}

class Prince {
    constructor(name, age, footCindaSize) {
        this.name = name
        this.age = age
        this.footCindaSize = footCindaSize
    }

    callPrince() {
        console.log('Принц', this.name, 'шукає свою мєчту з ', this.footCindaSize, '`м розміром педальок')
    }
}

let princesName = [
    ['Larisa', 'Klavdia', 'Zinaida', 'Paraska', 'Valentina', 'Khyvrya', 'Liuda', 'Vanda', 'Tamila', 'Mauzerina'],
    [45, 63, 55, 49, 71, 59, 54, 60, 77, 57],
    [36, 41, 40, 46, 37, 36, 39, 41, 35, 45]
]
const princeses = []
console.log(princesName[0].length)
for (let i = 0; i < princesName[0].length; i++)
    princeses.push(new Cinderella(princesName[0][i], princesName[1][i], princesName[2][i]))

for (let i = 0; i < princeses.length; i++) {
    princeses[i].callCinda()
}
let prince01 = new Prince('Volodya', 55, 41)
prince01.callPrince()

for (let i = 0; i < princeses.length; i++) {
    if (prince01.footCindaSize === princeses[i].footSize) {
        console.log('І це в нас буде ', princeses[i].name, ' яка має рочків', princeses[i].age)
        break
    }
}


