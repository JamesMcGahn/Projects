function validAnagram(string1, string2) {
    if (string1.length !== string2.length) return false

    let letters1 = {}
    let letters2 = {}

    for (let letter of string1) {
        if (letters1[letter]) letters1[letter]++
        else letters1[letter] = 1
    }

    for (let letter of string2) {
        if (letters2[letter]) letters2[letter]++
        else letters2[letter] = 1
    }

    for (let letter in letters1) {

        if (letters1[letter] !== letters2[letter]) return false

    }

    return true
}