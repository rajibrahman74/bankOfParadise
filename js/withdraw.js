// Add  event listener tho the whitdraw button
document.getElementById("whitdraw-btn").addEventListener("click", function () {
  // get the withdraw amount from the whitdraw field
  // always remember if you want a input field value than use .value
  const withdrawField = document.getElementById("whitdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // clear the withdraw field
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid input");
    return;
  }
  if (newWithdrawAmount < 0) {
    alert("Please input a positive value");
    return;
  }

  // get the current withdraw total amount
  // for non-input (element other than input, textarea) use  inner text to get the text
  const currentWithdrawTotal = document.getElementById("whitdraw-total");
  const previousWithdrawTotalString = currentWithdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // get the current balance total amount
  // for non-input (element other than input, textarea) use  inner text to get the text
  const currentBalance = document.getElementById("balance-total");
  const newBalanceTotalString = currentBalance.innerText;
  const newBalanceTotal = parseFloat(newBalanceTotalString);

  if (newWithdrawAmount > newBalanceTotal) {
    alert("You don't have enough money");
    return;
  }

  // add numbers set the total withdraw
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  currentWithdrawTotal.innerText = newWithdrawTotal;

  // substraction numbers set the total balance
  const newBalance = newBalanceTotal - newWithdrawAmount;
  currentBalance.innerText = newBalance;
});