const mathz = {
    add: function (x, y) {
        return x + y
    },
    PI: 3.14,
    square: function (x) {
        return x * x;
    }
}

// module.exports = mathz;
exports.mathz = mathz;