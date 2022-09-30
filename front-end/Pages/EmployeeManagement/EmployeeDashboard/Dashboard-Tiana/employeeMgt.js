// add employee button
const addEmployee = document.getElementById('add-employee')
// const cc = document.getElementsByid('content-area')

// form 1 elements
const form1Page = document.getElementById("form-1");
// const form1Page = document.querySelector('.form-1')
const backToEmployeePage = document.getElementById("back-to-employee-page");
const nextToForm2 = document.getElementById("forward-to-form2");

// form 2 elements
const form2Page = document.getElementById("form-2");
const backToForm1 = document.getElementById("back-2-form1");
const nextToForm3 = document.getElementById("next-2-form3");

// form 3 elements
const form3Page = document.getElementById("form-3");
const backToForm2 = document.getElementById("back-2-form2");
const nextToPreview = document.getElementById("next-2-preview");


// on click of the add empoyee button, display the first form page
addEmployee.addEventListener('click', () => {
    form1Page.classList.add('active');
    // cc.classList.add('blur')
    addEmployee.disabled = true

});

backToEmployeePage.addEventListener('click', ()=>{
    form1Page.classList.remove('active');
    addEmployee.disabled = false
});

// on click of the first form next button, display the second form page
nextToForm2.addEventListener('click', () => {

    form1Page.classList.remove('active');
    form2Page.classList.add('active');
});
// form 2 back button 
backToForm1.addEventListener('click', () => {
    form2Page.classList.remove('active');
    form1Page.classList.add('active');
})


// on click of the second form next button, display the third form page
nextToForm3.addEventListener('click', () => {

    form2Page.classList.remove('active');
    form3Page.classList.add('active');
});

// form 3 back button 
backToForm2.addEventListener('click', () => {
    form3Page.classList.remove('active');
    form2Page.classList.add('active');
})


// alert('loaded')