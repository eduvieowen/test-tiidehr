
const sectionArea = document.querySelector('#content-area');
const popupContainer = document.getElementById('popupContainer');
const popupContainerTwo = document.getElementById('popupContainerTwo');

const editData = document.getElementById('edit');

const cancel = document.getElementsByClassName('secondary-btn');
const save = document.getElementsByClassName('primary-btn');

// const cancelBtn = document.getElementById('cancel');  


function openPopup() {
  popupContainer.style.display = "flex";
  sectionArea.classList.toggle('blur');

}

// function openPopupTwo() {
//   popupContainerTwo.style.display = "flex";
//   sectionArea.classList.toggle('blur');
// }
// editData.addEventListener("click",openPopupTwo());

// editData.addEventListener("click", () => {
//   popupContainerTwo.style.display = "flex";
//   sectionArea.classList.toggle('blur');
// })



function closePopup() {
  popupContainer.style.display = "none";
  sectionArea.classList.toggle('blur');
}
function closePopupTwo() {
  popupContainerTwo.style.display = "none";
  sectionArea.classList.toggle('blur');
}