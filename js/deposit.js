// Add  event listener tho the deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the deposit amount from the deposit field
  //   always remember if you want a input field value than use .value
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  if (newDepositAmount < 0) {
    alert("Please add positive number");
  }

  // get the current deposit total amount
  // for non-input (element other than input, textarea) use  inner text to get the text
  const currentDepositTotal = document.getElementById("deposit-total");
  const previousDepositTotalString = currentDepositTotal.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // add numbers set the total deposit
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  currentDepositTotal.innerText = newDepositTotal;

  // get the current balance total amount
  // for non-input (element other than input, textarea) use  inner text to get the text

  const currentBalanceTotal = document.getElementById("balance-total");
  const previousBalanceTotalString = currentBalanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // add numbers set the total balance
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  currentBalanceTotal.innerText = newBalanceTotal;

  // clear the deposit field
  depositField.value = "";
});