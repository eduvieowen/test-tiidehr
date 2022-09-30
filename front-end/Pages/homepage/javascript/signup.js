// Initialize Animate on Scroll Library
AOS.init();

import { validatePassword, showError } from "./validation.js";

const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const passwordField = form.elements["password"];
  const cpasswordField = form.elements["cpassword"];

  // Validate password  Step 1
  if (!validatePassword(passwordField)) return; // if password does not match pattern, return (break out of the function)

  // compare cpassword with password Step 2
  if (passwordField.value !== cpasswordField.value) {
    showError(cpasswordField, "Password does not match");
    cpasswordField.classList.add("invalid"); // no need for a return keyword here because this is the last block of code in the function
  } else {
    register(passwordField);
  }
});

function register(passwordField) {
  // get Users from local storage
  const users = JSON.parse(localStorage.getItem("users")) || []; //get users from localStorage or return an empty array if user does not exist
  const firstNameField = form.elements["fname"];
  const lastNameField = form.elements["lname"];
  const emailField = form.elements["email"];

  const regData = {
    firstName: firstNameField.value,
    lastName: lastNameField.value,
    email: emailField.value,
    password: passwordField.value,
    userType: "employer"
  };
  let uniqueny = confirmUnique(regData.email);
  if (uniqueny) {
    users.push(regData);
    // Store user details to the local storage
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful, redirecting in 2 secs");
  setTimeout(() => {
    window.location =
      "/front-end/Pages/businessProfileDash/businessProfileDash.html";
  }, 2000);
  } else {
    alert('User already exists! try again');
  }
  
  
}

const navbar = document.querySelector(".navigation-mobile");
const navToggle = document.querySelector(".mobile-nav-toggle");
const body = document.querySelector(".body");

navToggle.addEventListener("click", () => {
  const visibility = navbar.getAttribute("data-visible");

  if (visibility === "false") {
    navbar.style.zIndex = "999";
    navbar.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    body.style.overflow = "hidden";
  } else if (visibility === "true") {
    navbar.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    body.style.overflow = "visible";
  }
});


function confirmUnique(email){
  let users = localStorage.getItem('users');
  let existingUsers = users == undefined ? [] : JSON.parse(users);
  let found = existingUsers.find(user=>user.email==email);
  if(found == undefined){
      return true
  }
  return false;

  
}
