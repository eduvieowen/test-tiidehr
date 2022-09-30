
// const displayDescription = document.getElementsByTagName('p');

// DOM ELEMENTS
const leaveAppForm = document.getElementById("leaveAppForm");
const tableBody = document.getElementById("leaveHistoryTable");
popupTitle = document.getElementById("popupTitle");

cancelBtn = document.querySelector('.secondary-btn');
const submitBtn = document.querySelector('.primary-btn');

startLeave = document.getElementById('startLeave');
endLeave = document.getElementById('endLeave');

// GET INPUTS
const typeInput = leaveAppForm['typeOfLeave'];
let startLeaveInput = leaveAppForm['startLeave'];
let endLeaveInput = leaveAppForm['endLeave'];
const descriptionInput = leaveAppForm['leaveText'];

let startDate;
let endDate;
// set min start leave to current date
startLeave.min = new Date().toISOString().split("T")[0];
endLeave.min = new Date().toISOString().split("T")[0];

// GETTING DATA FROM LOCAL STORAGE
const leaveDataToJSON = JSON.parse(localStorage.getItem("leave data"))
const leaveData = leaveDataToJSON || [];
console.log(leaveData);

let id = null;

// STORING INPUT DATA IN ARRAY INSIDE LOCAL STORAGE
const addLeaveData = (typeInput, dateApplied, durationInput, descriptionInput, startDate, endDate) => {
    if (id==null) {
        leaveData.push({
            typeInput,
            dateApplied,
            durationInput,
            descriptionInput,
            startDate,
            endDate
        });    
    }
    else {
        leaveData[id] = {
            typeInput,
            dateApplied,
            durationInput,
            descriptionInput,
            startDate,
            endDate
        }
    }
    const leaveDataToString = JSON.stringify(leaveData);
    localStorage.setItem("leave data", leaveDataToString);
    return { typeInput, dateApplied, durationInput, descriptionInput, startDate, endDate };
};

// ADDING VALUES TO DOM
// let leaveDescription;
let indexCounterOne = 0;
let indexCounterTwo = 0;
const editButtonsArray = [];
const deleteButtonsArray = [];

const createLeaveElement = ({ typeInput, dateApplied, durationInput, descriptionInput }) => {
    // Creates elements
    const leaveRow = document.createElement('tr');
    // leave type
    const leaveType = document.createElement('td');
    // application date
    const leaveApply = document.createElement('td');
    leaveApply.classList = "centered-td";
    // leave duration
    const leaveDuration = document.createElement('td');
    leaveDuration.classList = "centered-td";
    // leave status
    const leaveStatusContainer = document.createElement('td');
    const leaveStatus = document.createElement('div');
    leaveStatus.classList = "orange-bg"
    // action buttons
    const actionButtonsContainer = document.createElement('td');
    const actionButtonsWrapper = document.createElement('div');
    actionButtonsWrapper.classList = "actionButtonsWrapper";

    const editButton = document.createElement('i');
    editButton.classList = "fa-regular fa-xl fa-pen-to-square edit-data";
    const editButtonID = editButton.id = "editButton" + indexCounterOne++;

    const deleteButton = document.createElement('i');
    deleteButton.classList = "fa-regular fa-xl fa-trash-can delete-data";
    const deleteButtonID = deleteButton.id = "deleteButton" + indexCounterTwo++;

    // Leave description paragraphe
    const leaveDescription = document.createElement('p');
    leaveDescription.classList = "leaveDescription";
    const descripSpan = document.createElement('p');
    descripSpan.classList = "underlineText";

    // Fill contents
    leaveType.innerText = typeInput;
    leaveApply.innerText = dateApplied;
    leaveDuration.innerText = durationInput;
    leaveStatus.innerText = "PENDING";
    descripSpan.innerText = "DESCRIPTION:";

    // Append elements to DOM
    leaveDescription.append(descripSpan, descriptionInput);
    leaveType.appendChild(leaveDescription);
    leaveStatusContainer.appendChild(leaveStatus);
    actionButtonsWrapper.append(editButton, deleteButton);
    actionButtonsContainer.appendChild(actionButtonsWrapper);

    leaveRow.append(leaveType, leaveApply, leaveDuration, leaveStatusContainer, actionButtonsContainer);
    tableBody.appendChild(leaveRow);

    // Append button IDs to array
    editButtonsArray.push(editButtonID);
    deleteButtonsArray.push(deleteButtonID);
};
// console.log(editButtonsArray);
// console.log(deleteButtonsArray);

leaveData.forEach(createLeaveElement);

// FORM SUBMISSION
leaveAppForm.onsubmit = (event) => {

    startDate = leaveAppForm['startLeave'].value;
    endDate = leaveAppForm['endLeave'].value;

    // prevents page from reloading and data loss
    // event.preventDefault();

    // formatable current locale date
    const date = new Date();

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const currentDate = `${day}-${month}-${year}`;

    const dateApplied = currentDate;

    // leave duration algorithm
    const date1 = new Date(startLeaveInput.value);
    const date2 = new Date(endLeaveInput.value);
    // console.log(date1, date2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    durationInput = diffDays;

    // pass new leave data to create leave algo
    const newLeaveData = addLeaveData(
        typeInput.value,
        dateApplied,
        durationInput,
        descriptionInput.value,
        startDate,
        endDate
    );
    createLeaveElement(newLeaveData);

    // clearing inputs
    typeInput.value = "";
    startLeaveInput.value = "";
    endLeaveInput.value = "";
    descriptionInput.value = "";

    closePopup();
    // document.location.reload(true);
};
// IF CANCELLED
cancelBtn.addEventListener('click', () =>{
    // clearing inputs
    typeInput.value = "";
    startLeaveInput.value = "";
    endLeaveInput.value = "";
    descriptionInput.value = "";
    popupTitle.innerText = "Leave Application";
})

// DELETING DATA
for (let i = 0; i < deleteButtonsArray.length; i++) {

    const deleteButtonSelector = document.getElementById(deleteButtonsArray[i]);

    deleteButtonSelector.addEventListener('click', () => {
        const leaveTypeText = leaveData[i].typeInput;
        const leaveDescriptionText = leaveData[i].descriptionInput;
        
        const confirmDelete = confirm(`Confirm deletion of: 
        * LEAVE TYPE: "${leaveTypeText}"
        * DESCRIPTION: "${leaveDescriptionText}"`);

        if (confirmDelete == true) {
            leaveData.splice(i, 1);
            // console.log(leaveData);

            const leaveDataToString = JSON.stringify(leaveData);
            localStorage.setItem("leave data", leaveDataToString);

            alert(`Deleted "${leaveTypeText}"`);
            document.location.reload(true);
        }
        else {
            alert("Deletion Cancelled")
        }
    })
};

// EDITING DATA
for (let i = 0; i < editButtonsArray.length; i++) {

    const editButtonSelector = document.getElementById(editButtonsArray[i]);

    editButtonSelector.addEventListener('click', () => {
        popupTitle.innerText = "Edit Leave Application";
        openPopup();
        typeInput.value = leaveData[i].typeInput;
        startLeaveInput.value = leaveData[i].startDate;
        endLeaveInput.value = leaveData[i].endDate;
        descriptionInput.value = leaveData[i].descriptionInput;
        
        leaveAppForm.onsubmit = () => {
            alert(`'${leaveData[i].typeInput}' SUCCESFULLY UPDATED`);
        }
        
        id = i
    })
};