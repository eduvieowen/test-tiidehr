leave = document.querySelector(".leaveType");
duration = document.querySelector(".duration");
description = document.querySelector(".description");
popupTitle = document.getElementById("popupTitle");



table = document.querySelector(".table-body");
saveButton = document.querySelector(".saveButton")
createLeaveForm = document.getElementById("createLeaveForm");

let id = "no"
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

    let imageElement = document.createElement("td");
    imageElement.className = "centered-td";
    let buttonWrapper = document.createElement("div")
    buttonWrapper.className = "actionButtonsWrapper"
    // edit button
    buttonWrapper.innerHTML = `<a style="color:green" href="javascript:void(0)" onclick=editData(${detail})><i class="fa-regular fa-xl fa-pen-to-square"></i></a>`
    // delete button
    buttonWrapper.innerHTML += `<a href="javascript:void(0)" onclick=deleteData(${detail})><i class="fa-regular fa-xl fa-trash-can delete-data"></i></a>`
       
    
    imageElement.appendChild(buttonWrapper);
    tr.appendChild(imageElement);


    tableBody.appendChild(tr)
    
  }
  table.innerHTML = tableBody.innerHTML
  
}




createLeaveForm.onsubmit = (e) => {
    e.preventDefault();

    detail = {
      leave: leave.value,
      duration: duration.value,
      description: description.value,
    };

    // get users, if empty get empty array
    details = JSON.parse(localStorage.getItem("details") || "[]");
    if (id == "no") {
      details.push(detail);
    } else {
      details[id] = detail
      alert("Data updated")
      id = "no"
    }
      

    // update users
    localStorage.setItem("details", JSON.stringify(details));

    /* Clearing the input fields after the data is saved. */
    leave.value = "";
    duration.value = "";
    description.value = "";

    closePopup();
    displayData()
  }

function deleteData(detail) {
  detailData = JSON.parse(localStorage.getItem("details") || "[]");
  ans = confirm("Are you sure you want to delete?")
  if (ans == true) {
    detailData.splice(detail, 1);
    localStorage.setItem("details", JSON.stringify(detailData));
  }  
  displayData()
  
}

function editData(detail){
  popupTitle.innerText = "Edit Leave Policy";
  openPopup()
  id = detail
  detailData = JSON.parse(localStorage.getItem("details") || "[]");

  leave.value = detailData[detail]["leave"]
  duration.value = detailData[detail]["duration"]
  description.value = detailData[detail]["description"]
}

// IF CANCELLED
document.querySelector('.secondary-btn').addEventListener('click', () =>{
  popupTitle.innerText = "Create Leave Policy";
})