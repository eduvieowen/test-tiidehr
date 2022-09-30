# changes for dashboard.js

# line 19
```
menuIcon.addEventListener('click', () => {
    // alert('click')
    document.getElementById("sidebar").classList.toggle('toggle-sideBar')
    menuIcon.style.visibility = "hidden";
})
```
to
```
menuIcon.addEventListener('click', () => {
    // alert('click')
    document.getElementById("sidebar").classList.toggle('toggle-sideBar')
    // menuIcon.style.visibility = "hidden";
    menuIcon.classList.toggle("inactive");
})
```

# line 26
```
closeIcon.addEventListener('click', () => {
    // alert('click')
    document.getElementById("sidebar").classList.toggle('toggle-sideBar');
    menuIcon.style.visibility = "visible";

})
```
to
```
closeIcon.addEventListener('click', () => {
    // alert('click')
    document.getElementById("sidebar").classList.toggle('toggle-sideBar');
    menuIcon.style.visibility = "visible";
    menuIcon.classList.toggle("inactive");

})