function binarysearch(arr, val) {
    let left = 0
    let right = arr.length - 1
    let middle = Math.floor(arr.length - 1 / 2)
    while (left < right) {
        debugger;
        if (arr[middle] === val) return middle
        if (val > arr[middle]) {
            left = middle + 1
        }
        if (val < arr[middle]) {
            right = middle - 1
        }
        middle = Math.floor((left + right) / 2)
    }
    return -1
}
