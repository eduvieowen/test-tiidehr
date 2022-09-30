const employeeCount = document.getElementById("employee-count")
const roleCount = document.getElementById("role-count")
const levelCount = document.getElementById("level-count")


let roleValue = JSON.parse(localStorage.getItem("roleData")) || [];
let levelValue = JSON.parse(localStorage.getItem("roleMng")) || [];
let employeeValue = JSON.parse(localStorage.getItem("allEmployeeDetails")) || [];


employeeCount.innerHTML = `${employeeValue.length}`
roleCount.innerHTML = `${roleValue.length}`
levelCount.innerHTML = `${levelValue.length}`


table = document.querySelector(".table-body");
displayData();

function displayData() {
  details = JSON.parse(localStorage.getItem("details") || "[]");
  tableBody = document.createElement("tbody")
  for (detail in details) {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let leaveElement = document.createElement("td");
    leaveElement.innerHTML = details[detail]["leave"];
    tr.appendChild(leaveElement);

    let durationElement = document.createElement("td");
    durationElement.innerHTML = details[detail]["duration"];
    tr.appendChild(durationElement);

    let descriptionElement = document.createElement("td");
    descriptionElement.innerHTML = details[detail]["description"];
    tr.appendChild(descriptionElement);


    tableBody.appendChild(tr)
    
  }
  table.innerHTML = tableBody.innerHTML
  
}