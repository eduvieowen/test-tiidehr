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
    menuIcon.style.visibility = "hidden";
})


closeIcon.addEventListener('click', () => {
    // alert('click')
    document.getElementById("sidebar").classList.toggle('toggle-sideBar');
    menuIcon.style.visibility = "visible";

})
