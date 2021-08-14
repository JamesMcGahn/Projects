let isPalindrome = function (s) {
    const string = s.replace(/[\W+|_]/ig, '').toLowerCase()
    const sReverse = [...string].reverse().join('').toLowerCase()
    return string === sReverse ? true : false
};