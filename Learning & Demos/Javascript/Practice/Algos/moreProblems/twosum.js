// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

let twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        let x = target - nums[i]
        if (nums.includes(x)) {
            if (i !== nums.indexOf(x)) {
                return [i, nums.indexOf(x)]
            }
        }
    }
};