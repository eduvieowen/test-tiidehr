// Dashboard arrow 
const sidebar = document.getElementById("sidebar")

let allTag = sidebar.querySelectorAll("p")
    function toggleArrow(){
    document.getElementById("arrow").classList.toggle("rotate-arrow")
    
    allTag.forEach((tag) =>{
        tag.classList.toggle("showP")
    })

}

