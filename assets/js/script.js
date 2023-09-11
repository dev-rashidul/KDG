// JavaScript for Header

const bars = document.getElementById("bars");
const sidebar = document.getElementById("Sidebar");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Menu Profile JavaScript

const dh_profile = document.getElementById("dh_profile");
const menu_profile = document.getElementById("menu_profile");

dh_profile.addEventListener("click", () => {
  menu_profile.classList.toggle("active");
});

// JavaScript For Notification

const notification_btn = document.getElementById("notification-btn");
const notification = document.getElementById("notification");
const notification_cross = document.getElementById("notification-cross");

notification_btn.addEventListener("click", () => {
  notification.classList.add("active");
});

notification_cross.addEventListener("click", () => {
  notification.style.display = "none"
});


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
