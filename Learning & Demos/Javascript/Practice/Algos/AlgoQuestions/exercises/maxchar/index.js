// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {
    let obj = {};
    let count = 0
    let largechar = ''
    for (let char of string) {
        if (obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    }

    for (let char in obj) {
        if (obj[char] > count) {
            count = obj[char]
            largechar = char
        }
    }

    return largechar
}
module.exports = maxChar;
