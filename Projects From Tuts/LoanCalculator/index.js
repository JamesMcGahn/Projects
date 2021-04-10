// listen for submit

document.querySelector('#loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
    //Ui vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12

    // montly payment
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2)
    } else {
        showError('Please Check Your Numbers')
    }
    e.preventDefault();
}

// show Error
function showError(error) {
    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error))

    card.insertBefore(errorDiv, heading)

    setTimeout(clearError, 3000)
}

function clearError() {
    document.querySelector('.alert').remove()
}