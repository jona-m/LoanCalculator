document.getElementById('loan-form').addEventListener('submit', calculateResults)
function calculateResults(e) {
    console.log('Calculating')
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

    const principal = parseFloat(amount.value)
    const calculateInterst = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculateInterst, calculatedPayment);
    const monthly = (principal * x * calculateInterst) / (x - 1)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2)
    } else {
        showError('Please check your numbers')
    }

    e.preventDefault()
}

function showError(error) {
    const errorDiv = document.createElement('div')
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error))
    card.insertBefore(errorDiv, heading)
    setTimeout(clearError, 3000);

}

function clearError() {
    document.querySelector('.alert').remove()
}

