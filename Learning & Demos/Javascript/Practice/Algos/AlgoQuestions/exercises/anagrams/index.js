// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const string1 = stringA.replace(/[^\w+]/g, '').toLowerCase()
    const string2 = stringB.replace(/[^\w+]/g, '').toLowerCase()

    letters1 = {}
    letters2 = {}
    if (string1.length !== string2.length) return false

    for (let char of string1) {
        letters1[char] ? letters1[char]++ : letters1[char] = 1
    }
    for (let char of string2) {
        letters2[char] ? letters2[char]++ : letters2[char] = 1
    }

    for (let key in letters1) {
        if (letters1[key] !== letters2[key]) return false
    }

    return true
}

module.exports = anagrams;
