// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let string = n.toString();
    let arry = [...string]
    if (arry[0] === '-') {
        arry.shift()
        arry.reverse()
        arry.unshift('-')
        let cheese = arry.join('')
        return parseInt(cheese)
    } else {
        cheese = arry.reverse().join('')
    }


    return parseInt(cheese)
}
//better solution would be instead of if/else of the arr[0], check math.sign(n) or n <0 and times one on the return

module.exports = reverseInt;
