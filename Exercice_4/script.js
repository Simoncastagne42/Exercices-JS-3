const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const verif = document.querySelector("#verif");

verif.addEventListener("click", handleMouseClickVerif);
function handleMouseClickVerif() {
  if (password.value === confirmPassword.value) {
    password.style.border = "solid medium";
    password.style.border = "2px outset green";
    confirmPassword.style.border = "solid medium";
    confirmPassword.style.border = "3px outset green";
  } else {
    password.style.border = "solid medium";
    password.style.border = "2px outset red";
    confirmPassword.style.border = "solid medium";
    confirmPassword.style.border = "3px outset red";
  }
}
