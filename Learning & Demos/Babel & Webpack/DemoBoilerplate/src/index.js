import othersquares, { add } from './utilities'

const name = 'Cheese'
console.log(name)

class Hangman {
    myMethod() {
        return 'testing'
    }
}

const hangman = new Hangman()
console.log(hangman.myMethod())
console.log(add(32, 33))

console.log(othersquares(5))