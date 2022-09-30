const employeeCards = document.getElementById("employee-cards")
const saveButton = document.getElementById("preview-Button")

const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const phone = document.getElementById("phone-num")
const level = document.getElementById("level")
const role = document.getElementById("role")
const resDate = document.getElementById("res-date")
const picInput = document.getElementById("dp-image")

let dUrl = ""


// saveEmployeeData()
picInput.addEventListener("change", (e) => {
  const fileReader = new FileReader();
  const img = picInput.files[0];

  fileReader.addEventListener("load", (e) => {
    // console.log(fileReader.result);

    dUrl = fileReader.result;
  });

  fileReader.readAsDataURL(img);
});



saveButton.addEventListener('click', (e) => {

  console.log(dUrl)




  e.preventDefault()
  const employeeDetail = {
    firstName: firstName.value,
    lastName: lastName.value,
    level: level.value,
    role: role.value,
    email: email.value,
    phone: phone.value,
    resDate: resDate.value,
    imgUrl: dUrl
  }

  console.log(employeeDetail)
  // populate localstorage
  const allEmployeeDetails = JSON.parse(localStorage.getItem("allEmployeeDetails") || "[]");
  allEmployeeDetails.push(employeeDetail);

  window.localStorage.setItem("allEmployeeDetails", JSON.stringify(allEmployeeDetails));
  let users = JSON.parse(localStorage.getItem('users')) || [];
  detail = {
      firstName: employeeDetail.firstName,
      lastName: employeeDetail.lastName,
      email: employeeDetail.email,
      userType: "employee",
      password: "Tiidelab@123"
  }
  users.push(detail)
  localStorage.setItem("users", JSON.stringify(users));
  window.location.reload()
  closePopup()
})



function displayEmployeeData() {

  const allData = window.localStorage.getItem("allEmployeeDetails");

  allEmployeeDetails = JSON.parse(allData || "[]");

  // console.log(allEmployeeDetails)

  for (employeeDetail in allEmployeeDetails) {
    // 
    // 
    const detailsText = eleCreate("div", "details")
    // full name    
    const firstName = allEmployeeDetails[employeeDetail]["firstName"]

    const lastName = allEmployeeDetails[employeeDetail]["lastName"]

    const fullName = eleCreate("h4", "fullName")
    fullName.textContent = `${firstName} ${lastName}`
    detailsText.appendChild(fullName)
    // role and level

    const role = allEmployeeDetails[employeeDetail]["role"]
    const level = allEmployeeDetails[employeeDetail]["level"]
    const levelRole = eleCreate("h4", "role")
    levelRole.textContent = `${level} ${role}`
    detailsText.appendChild(levelRole)
    // 
    // 
    const detailGroup1 = eleCreate("div", "detail-group1")
    // mail
    const mail = eleCreate("p")
    mail.textContent = `Email: ${allEmployeeDetails[employeeDetail]["email"]}`
    detailGroup1.appendChild(mail)
    // 
    // 
    const detailGroup2 = eleCreate("div", "detail-group2")
    // phone
    const phone = eleCreate("p")
    phone.textContent = `Tel: ${allEmployeeDetails[employeeDetail]["phone"]}`
    detailGroup2.appendChild(phone)
    // 
    // 
    const detailGroup3 = eleCreate("div", "detail-group3")
    // resumption date
    const resDate = eleCreate("p")
    resDate.textContent = `Start Date: ${allEmployeeDetails[employeeDetail]["resDate"]}`
    detailGroup3.appendChild(resDate)
    // 
    // action button
    const actionButn = eleCreate("button", "butn")
    actionButn.classList.add('primary-button')
    actionButn.textContent = "Edit"

    // details hover section
    const detailsHover = eleCreate("div", "details-hover")

    detailsHover.appendChild(detailGroup1)
    detailsHover.appendChild(detailGroup2)
    detailsHover.appendChild(detailGroup3)
    detailsHover.appendChild(actionButn)


    //For details on small screens
    const smDetailGroup1 = eleCreate("div", "sm-detail-group1")
    // mail
    const smMail = eleCreate("p")
    smMail.textContent = `Email: ${allEmployeeDetails[employeeDetail]["email"]}`
    smDetailGroup1.appendChild(smMail)
    // 
    // 
    const smDetailGroup2 = eleCreate("div", "sm-detail-group2")
    // phone
    const smPhone = eleCreate("p")
    smPhone.textContent = `Tel: ${allEmployeeDetails[employeeDetail]["phone"]}`
    smDetailGroup2.appendChild(smPhone)
    // 
    // 
    const smDetailGroup3 = eleCreate("div", "sm-detail-group3")
    // resumption date
    const smResDate = eleCreate("p")
    smResDate.textContent = `Start Date: ${allEmployeeDetails[employeeDetail]["resDate"]}`
    smDetailGroup3.appendChild(smResDate)
    // 
    // action button
    const smActionButn = eleCreate("button", "butn")
    smActionButn.classList.add('primary-button')
    smActionButn.textContent = "Edit"


    // // sm details display
    const detailsTextDisplay = eleCreate("div", "sm-display-text")
    const detailsDisplay = eleCreate("div", "sm-details-display")

    detailsTextDisplay.appendChild(smDetailGroup1)
    detailsTextDisplay.appendChild(smDetailGroup2)
    detailsTextDisplay.appendChild(smDetailGroup3)
    // sm detial display text appended to details display
    detailsDisplay.appendChild(detailsTextDisplay)
    detailsDisplay.appendChild(smActionButn)

    detailsText.appendChild(detailsDisplay)

    // 
    // create img tag and append to the employee card
    const imgUrl = allEmployeeDetails[employeeDetail]["imgUrl"]
    // console.log(imgUrl)
    const employeeImg = document.createElement('img')
    employeeImg.setAttribute("src", imgUrl)
    // 
    const employeeCard = eleCreate("div", "employee-card")
    //
    employeeCard.appendChild(detailsText)
    employeeCard.appendChild(detailsHover)
    employeeCard.appendChild(employeeImg)
    // 
    employeeCard.appendChild(detailsText)
    // console.log(details)

    // 
    // 
    employeeCards.appendChild(employeeCard)

    
  }
}
// console.log(employeeCards)

function eleCreate(ele, eleClass) {

  const element = document.createElement(ele)
  if (eleClass) {
    element.classList.add(eleClass)
  }
  return element
}
displayEmployeeData()


// Toggle employee card display














