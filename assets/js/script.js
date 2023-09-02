// Password Eye JavaScript

const eye = document.querySelector(".eye");
const password = document.getElementById("password");
const eye_open = document.getElementById("eye_open");
const eye_close = document.getElementById("eye_close");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eye_open.style.display = "block";
    eye_close.style.display = "none";
  } else {
    password.type = "password";
    eye_open.style.display = "none";
    eye_close.style.display = "block";
  }
});