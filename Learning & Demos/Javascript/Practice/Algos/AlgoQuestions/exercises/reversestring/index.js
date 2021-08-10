// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// ** solution if i can use reverse -- note: could use join instead of regex and to string
// function reverse(str) {
//     let arry = [...str].reverse().toString().replace(/,/g, '')
//     //note: could use join instead of regex and to string
//     // let arry = [...str].reverse().join('')
//     return arry
// }


// ** solutions if i cant use reverse
// reduce way
function reverse(str) {
    return [...str].reduce((newstring, char) => char + newstring, '')
}

// for loop version

// function reverse(str) {
//     let newString = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i]
//     }
//     return newString
// }

module.exports = reverse;
