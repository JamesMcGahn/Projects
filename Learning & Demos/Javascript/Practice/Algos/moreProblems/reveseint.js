// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

let reverse = function (x) {
    const neg = x < 0
    const max = 2147483647
    if (x < 0) x = x * -1
    const newX = x.toString()
    let num = [...newX]

    let convert = neg ? (Number(num.reverse().join('')) * (-1)) : Number(num.reverse().join(''))


    return convert > max || convert < -max ? 0 : convert
};