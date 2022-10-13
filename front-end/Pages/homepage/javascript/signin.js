
// Hamburger functionality
const navbar = document.querySelector('.navigation-mobile');
const navToggle = document.querySelector('.mobile-nav-toggle');
const body = document.querySelector('.body');
navToggle.addEventListener('click', () => {
const visibility = navbar.getAttribute('data-visible');
if (visibility === "false") {
  navbar.style.zIndex = '999'
  navbar.setAttribute("data-visible", true);
  navToggle.setAttribute("aria-expanded", true);
  body.style.overflow = 'hidden'
} else if (visibility === "true") {
  navbar.setAttribute("data-visible", false);
  navToggle.setAttribute("aria-expanded", false);
  body.style.overflow = 'visible'
}
})

// Toggle password visibility
let passwordToggle = document.querySelector(".toggle-password");
passwordToggle.addEventListener("click", (e)=> {
  e.preventDefault();
  const passwordField = form.elements["password"];
  if (passwordField.getAttribute("type") === "password") {
    passwordField.setAttribute("type", "text");
    // passwordField.classList.add("show")
  } else {
    passwordField.setAttribute("type", "password");
    // passwordField.classList.remove("show");
  }
  // passwordField.classList.toggle("show");
})



// import { validatePassword } from "./validation.js";
import {showError} from "./validation.js";
const form = document.getElementById("signinForm");
form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const passwordField = form.elements["password"].value;
    const emailField = form.elements["email"].value;

    let validUser = confirmUser(emailField, passwordField);
    if (validUser) {
      // const currentUser = JSON.parse(localStorage.getItem("currentUser")) || []; //get users from localStorage or return an empty array if user does not exist
      localStorage.setItem("currentUser", JSON.stringify(validUser))
      if (validUser[0].userType === "employer") {
        return window.location = "/front-end/Pages/EmployeeManagement/employeeMgt.html"
      } else {
        return window.location = "/front-end/Pages/EmployeeManagement/EmployeeDashboard/Dashboard-Tiana/dashboard-tiana.html"
      }
      
    }
    else {
      const errorBox = document.querySelector("small");
      showError(errorBox, "Incorrect email or password, please try again")
    }
    

})

  function confirmUser(email, password){
    const users = JSON.parse(localStorage.getItem("users")); // Get registered users from local storage
    // let foundUserEmail = users.find(user=>user.email==email);
    // let foundUserPassword = users.find(user=>user.password==password);
    let foundUser = users.filter(user=>{
      if(user.email === email && user.password === password){
        return user
      }
    return false
    })
    return foundUser;
      //   if(foundUserEmail && foundUserPassword){
      //     return true
      // }
      //     return false;

      }






