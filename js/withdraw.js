// Add  event listener tho the whitdraw button
document.getElementById("whitdraw-btn").addEventListener("click", function () {
  // get the withdraw amount from the whitdraw field
  // always remember if you want a input field value than use .value
  const withdrawField = document.getElementById("whitdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // get the current withdraw total amount
  // for non-input (element other than input, textarea) use  inner text to get the text
  const currentWithdrawTotal = document.getElementById("whitdraw-total");
  const previousWithdrawTotalString = currentWithdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // add numbers set the total withdraw
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  currentWithdrawTotal.innerText = newWithdrawTotal;


  // get the current balance total amount
  // for non-input (element other than input, textarea) use  inner text to get the text
  const 


  // clear the withdraw field
  withdrawField.value = "";
});
