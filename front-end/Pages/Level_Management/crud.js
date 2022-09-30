id = "no"
role = document.querySelector(".role");
salary = document.querySelector(".salary");
description = document.querySelector(".description");

let money = document.getElementById("selectCurrency")

let button = document.getElementById("save")
tableBody = document.getElementById("container")



button.addEventListener("click", () => {

  data = {
    role : role.value,
    salary : salary.value,
    description : description.value 
  }

  let roleManagement = JSON.parse(localStorage.getItem("roleMng") || "[]")
  if (id == "no") {
    roleManagement.push(data);
  } else {
    roleManagement[id] = data
    alert("Data updated")
    id = "no"
  }

  localStorage.setItem("roleMng",JSON.stringify(roleManagement))
  window.location.reload();
})



function display() {
  let roleManagement = JSON.parse(localStorage.getItem("roleMng") || "[]")
  let cur = (localStorage.getItem("currency") || "")
  money.innerHTML =  cur;
  for (let info in roleManagement){
      tableRow = document.createElement("tr")

      levelElement = document.createElement("td")
      levelElement.innerHTML = roleManagement[info]["role"]
      tableRow.appendChild(levelElement)

      descriptionElement = document.createElement("td")
      descriptionElement.innerHTML = roleManagement[info]["description"]
      tableRow.appendChild(descriptionElement)

      salaryElement = document.createElement("td")
      salaryElement.innerHTML = roleManagement[info]["salary"]
      tableRow.appendChild(salaryElement)

      tableBody.appendChild(tableRow)

      let imageElement = document.createElement("td");

      let buttonWrapper = document.createElement("div");
      buttonWrapper.className = "actionButtonsWrapper";

      buttonWrapper.innerHTML = `<a style="color:green" href="javascript:void(0)" onclick=editData(${info})><i class="fa-solid fa-2xl fa-pen-to-square"></i></a>`
      // delete button
      buttonWrapper.innerHTML += `<a href="javascript:void(0)" onclick=deleteData(${info})><i class="fa-regular fa-2xl fa-trash-can delete-data"></i></a>`
      //deleteButton.onclick = deleteData(detail);
 
      imageElement.appendChild(buttonWrapper);
      tableRow.appendChild(imageElement);
    
  }
}

display()

function deleteData(table) {
  roleManagement = JSON.parse(localStorage.getItem("roleMng") || "[]");
  ans = confirm("Are you sure you want to delete?")
  if (ans == true) {
    roleManagement.splice(table, 1);
    localStorage.setItem("roleMng", JSON.stringify(roleManagement));
  }
  window.location.reload()
}

function editData(table){
  openPopup()
  id = table
  roleData = JSON.parse(localStorage.getItem("roleMng"))

  role.value = roleData[table]["role"]
  salary.value = roleData[table]["salary"]
  description.value = roleData[table]["description"]
  // select.forEach((user) =>{
  //     if(roleAccess.includes(user))  
  // })
}