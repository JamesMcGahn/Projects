// Given an integer x, return true if x is palindrome integer.

let isPalindrome = function (x) {
    if (x < 0) return false
    let check = [...String(x)].reverse().join('')
    let orginal = String(x)
    if (orginal === check) return true

    return false
};