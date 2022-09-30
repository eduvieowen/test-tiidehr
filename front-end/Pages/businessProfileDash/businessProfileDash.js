// const sidebar = document.getElementById("sidebar")

// let allTag = sidebar.querySelectorAll("p")
    
// function toggleArrow(){
//     document.getElementById("arrow").classList.toggle("rotate-arrow")

//     allTag.forEach((tag) =>{
//         tag.classList.toggle("showP")
//     })
// }



// get all display elements on the page
const namePreview = document.getElementById("name-preview")
const addressPreview = document.getElementById("address-preview")
const emailPreview = document.getElementById("email-preview")
const cacPreview = document.getElementById("cac-preview")
const rcPreview = document.getElementById("rc-preview")
const tinPreview = document.getElementById("tin-preview")
//


const save = document.getElementById("save")

save.addEventListener('click', (e) => {
    console.log("click")
  e.preventDefault()
  // alert("click")

  const name = document.getElementById("name").value
  const address = document.getElementById("address").value
  const email = document.getElementById("email").value
  const cac = document.getElementById("cac").value
  const rc = document.getElementById("rc").value
  const tin = document.getElementById("tin").value
  const currency = document.getElementById("currency").value
 

  namePreview.innerHTML = `${name}`
  addressPreview.innerHTML = `${address}`
  emailPreview.innerHTML = `${email}`
  cacPreview.innerHTML = `${cac}`
  rcPreview.innerHTML = `${rc}`
  tinPreview.innerHTML = `${tin}`

  console.log(name, address, email, cac, rc, tin)

  localStorage.setItem("currency", currency);
})

const sidebar = document.getElementById("sidebar")

let allTag = sidebar.querySelectorAll("a")

function toggleArrow() {
    document.getElementById("arrow").classList.toggle("rotate-arrow")

    allTag.forEach((tag) => {
        tag.classList.toggle("showP")
    })

}


// Toggle side bar menu
const menuIcon = document.getElementById('fa-bars')
const closeIcon = document.getElementById('fa-xmark')

menuIcon.addEventListener('click', () => {
    // alert('click')
    document.getElementById("sidebar").classList.toggle('toggle-sideBar')
    // menuIcon.style.visibility = "hidden";
    menuIcon.classList.toggle("inactive");
})


closeIcon.addEventListener('click', () => {
    // alert('click')
    document.getElementById("sidebar").classList.toggle('toggle-sideBar');
    menuIcon.style.visibility = "visible";
    menuIcon.classList.toggle("inactive");
})





