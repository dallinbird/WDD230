const kp1 = document.querySelector("#password1");
const kp2 = document.querySelector("#password2");
const message = document.querySelector("#formMessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  if (kp1.value !== kp2.value) {
    message.textContent = "❗Passwords do not match❗";
    message.style.visibility = "show";
    kp2.style.backgroundColor = "#fff0f3";
    kp2.value = "";
    kp2.focus();
  } else {
    message.style.display = "none";
    kp2.style.backgroundColor = "#fff";
    kp2.style.color = "#000";
  }
}
