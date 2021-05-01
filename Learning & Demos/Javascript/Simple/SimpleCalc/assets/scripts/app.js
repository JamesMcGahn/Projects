const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() { return +userInput.value }

function createAndWrite(operater, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operater} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function add() {
    const enteredNum = getUserInput()
    const initalResult = currentResult;
    calcDescription = createAndWrite('+', initalResult, enteredNum)
    currentResult += parseInt(enteredNum);

}

function subtract() {
    const enteredNum = getUserInput()
    const initalResult = currentResult;
    calcDescription = createAndWrite('-', initalResult, enteredNum)
    currentResult -= parseInt(enteredNum);
}

function multiply() {
    const enteredNum = getUserInput()
    const initalResult = currentResult;
    calcDescription = createAndWrite('*', initalResult, enteredNum)
    currentResult *= parseInt(enteredNum);
}

function divide() {
    const enteredNum = getUserInput()
    const initalResult = currentResult;
    calcDescription = createAndWrite('/', initalResult, enteredNum)
    currentResult /= parseInt(enteredNum);
}


addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
