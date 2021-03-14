
// should recurse in a range of numbers and add to array ---min to max

// 1st attempt
// function rangeOfNumbers(startNum, endNum) {
//     debugger;
//     if (startNum - endNum === 0) {
//         return []
//     } else {
//         const arry = rangeOfNumbers(startNum + 1, endNum);
//         arry.push(startNum);
//         return arry;

//     }


// };
// didnt work need to adjust base condition. nums are counting down need to revserve that
// 2nd attempt

function rangeOfNumbers(startNum, endNum) {
    debugger;
    if (startNum > endNum) {
        return []
    } else {
        const arry = rangeOfNumbers(startNum + 1, endNum);
        arry.unshift(startNum);
        return arry;

    }
};

// worked with a range, need to test for same number

// worked for same number 