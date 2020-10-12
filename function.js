document.getElementById("loan-form");
document.addEventListener("submit", calculateResults);
// Calculate Results
function calculateResults(e) {
  e.preventDefault();
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value);

  // Computed Monthly payment
  const principalValue = principal * calculatedInterest;
  const nthMonth = (1 + calculatedInterest) ** calculatedPayments;
  const monthlyNumerator = principalValue * nthMonth;
  const monthlyPaymentDivisor = nthMonth - 1;
  const monthlyAmount = monthlyNumerator / monthlyPaymentDivisor;
  //   Overall Payment
  const overallPayment = calculatedPayments * monthlyAmount;
  // Interest++
  const interestOnLoan = overallPayment - principal;

  if (isFinite(monthlyAmount)) {
    console.log(monthlyAmount);
    monthlyPayment.value = monthlyAmount.toFixed(2);
    totalPayment.value = overallPayment.toFixed(2);
    totalInterest.value = interestOnLoan.toFixed(2);

    // Show Results
    document.getElementById("result").style.display = "block";

    // Hide Loader
  } else {
    showError("Please check number inputs");
  }
}
