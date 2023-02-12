document.getElementById("btn-submit").addEventListener("click", function () {
  const userEmailField = document.getElementById("user-email");
  const userEmail = userEmailField.value;
  const userPasswordField = document.getElementById("user-password");
  const userPassword = userPasswordField.value;

  if (userEmail === "abumotaleb@gmail.com" && userPassword === "1234") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
