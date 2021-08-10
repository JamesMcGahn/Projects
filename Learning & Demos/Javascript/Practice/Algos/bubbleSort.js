function bubbleSort(arr) {
    let swaps
    for (let i = arr.length; i > 0; i--) {
        swaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swaps = false
            }
        }
        if (swaps) break;
    }
    return arr
}