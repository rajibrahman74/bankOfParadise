// Add cllick event handler with submit button
document.getElementById("submit-btn").addEventListener("click", function () {
  // get the email address inside the email field

  //   always remember if you want a input field value than use .value
  const emailField = document.getElementById("user-email");
  const getEmail = emailField.value;

  // get the email address inside the email field
  const passwordField = document.getElementById("user-password");
  const getPassword = passwordField.value;

  // verified email and password
  if (getEmail === "1" && getPassword === "2") {
    window.location.href = ("/bank.html");
  } else {
    alert("please enter valid email or password!")
  }
});