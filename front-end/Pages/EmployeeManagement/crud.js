let role = document.getElementById("role");
let description = document.getElementById("textar");
let select = document.querySelectorAll(".new");
let tableBody = document.querySelector(".container");


function saveData() {
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
    roleData.push(data);

    // update users
    localStorage.setItem("roleData", JSON.stringify(roleData));


}


function displayData() {
    let tableData = JSON.parse(localStorage.getItem("roleData") || "[]");

    for (let table in tableData) {
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
            accessElement.appendChild(elem)

        }
        tableRow.appendChild(accessElement);


        let users = document.createElement("td")
        users.className = "centered-td"
        users.innerHTML = Math.floor(Math.random() * 50);
        tableRow.appendChild(users)


        let imageElement = document.createElement("td");

        let buttonWrapper = document.createElement("div");
        buttonWrapper.className = "actionButtonsWrapper";

        editButton = document.createElement("i");
        editButton.className = "fa-regular fa-2xl fa-pen-to-square edit-data";
        editButton.style.color = "green";
        editButton.style.padding = "5px";
        editButton.style.cursor = "pointer";

        deleteButton = document.createElement("i");
        deleteButton.className = "fa-regular fa-2xl fa-trash-can delete-data";
        deleteButton.style.color = "red";
        deleteButton.style.padding = "5px";
        deleteButton.style.cursor = "pointer";

        deleteButton.onclick = function () {
            ans = confirm("Are you sure you want to delete");
            if (ans == true) {
                tableData.splice(table, 1);
                // update data
                localStorage.setItem("roleData", JSON.stringify(tableData));
                window.location.reload();
                alert("Succesfully deleted");
            }

            //displayData();
        };
        //deleteButton.onclick = deleteData(detail);

        buttonWrapper.appendChild(editButton);
        buttonWrapper.appendChild(deleteButton);
        imageElement.appendChild(buttonWrapper);
        tableRow.appendChild(imageElement);


        tableBody.appendChild(tableRow);


    }
}
displayData();

