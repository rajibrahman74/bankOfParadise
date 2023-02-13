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
  if (getEmail === "rajiburrahman74@gmail.com" && getPassword === "rajib's") {
    console.log("hello rajib suhana");
  }
});