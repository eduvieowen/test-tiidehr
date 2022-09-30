let role = document.getElementById("role");
let description = document.getElementById("textar");
let select = document.querySelectorAll(".new");
let tableBody = document.querySelector(".container");
let saveBtn = document.querySelector(".saveButton");
let bodyTab = document.querySelector(".bodyTable");
let cancelBtn = document.querySelector(".cancelButton")
id = "no"

// reset value when cancel button is clicked
cancelBtn.addEventListener('click', () =>{
  role.value ="";
    description.value = "";
    select.forEach((user) =>{
        user.value = "none"
    })
})


saveBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    arr = []
    select.forEach((user) => {
        if (user.value !== "none") {
            arr.push(user.value)
        }
    })

    data = {
        role: role.value,
        description: description.value,
        roleAccess: arr
    }
    console.log(data)

    let roleData = JSON.parse(localStorage.getItem("roleData") || "[]");
    if (id == "no") {
        roleData.push(data);
      } else {
        roleData[id] = data
        alert("Data updated")
        id = "no"
      }


    // update users
    localStorage.setItem("roleData", JSON.stringify(roleData));

    role.value ="";
    description.value = "";
    select.forEach((user) =>{
        user.value = "none"
    })


    closePopupThree();
    displayData();

})

function displayData() {
    let tableData = JSON.parse(localStorage.getItem("roleData") || "[]");
    let tBody = document.createElement("tbody")
    for (let table in tableData){
        let tableRow = document.createElement("tr");
        let roleElement = document.createElement("td");
        roleElement.innerHTML = tableData[table]["role"];
        tableRow.appendChild(roleElement);

        let descriptionElement = document.createElement("td")
        descriptionElement.innerHTML = tableData[table]["description"]
        tableRow.appendChild(descriptionElement)

        let accessElement = document.createElement("td")
        for (access in tableData[table]["roleAccess"]) {
            let elem = document.createElement("p")
            elem.innerHTML = tableData[table]["roleAccess"][access]
            elem.style.marginBottom = "10px";
            accessElement.appendChild(elem)

        }
        tableRow.appendChild(accessElement);


        let users = document.createElement("td")
        users.className = "centered-td"
        users.innerHTML = Math.floor(Math.random() * 0);
        tableRow.appendChild(users)


        let imageElement = document.createElement("td");

        let buttonWrapper = document.createElement("div");
        buttonWrapper.className = "actionButtonsWrapper";

        buttonWrapper.innerHTML = `<a style="color:green" href="javascript:void(0)" onclick=editData(${table})><i class="fa-regular fa-xl fa-pen-to-square"></i></a>`
        // delete button
        buttonWrapper.innerHTML += `<a href="javascript:void(0)" onclick=deleteData(${table})><i class="fa-regular fa-xl fa-trash-can delete-data"></i></a>`
        //deleteButton.onclick = deleteData(detail);

        
        imageElement.appendChild(buttonWrapper);
        tableRow.appendChild(imageElement);


        tBody.appendChild(tableRow);


    }
    bodyTab.innerHTML = tBody.innerHTML
}
displayData();

function deleteData(table) {
    roleData = JSON.parse(localStorage.getItem("roleData") || "[]");
    ans = confirm("Are you sure you want to delete?")
    if (ans == true) {
      roleData.splice(table, 1);
      localStorage.setItem("roleData", JSON.stringify(roleData));
    }  
    displayData()
    
  }


  function editData(table){
    openPopup()
    id = table
    roleData = JSON.parse(localStorage.getItem("roleData"))

    role.value = roleData[table]["role"]
    description.value = roleData[table]["description"]
    roleAccess = roleData[table]["roleAccess"]
    // select.forEach((user) =>{
    //     if(roleAccess.includes(user))  
    // })
  }