
const sectionArea = document.querySelector('#content-area');
const popupContainer = document.getElementById('popupContainer');
const popupContainerTwo = document.getElementById('popupContainerTwo');

function openPopup() {
  popupContainer.classList.toggle('flex');
  sectionArea.classList.toggle('myBlur');
}
function openPopupTwo() {
  popupContainerTwo.classList.toggle('flex');
  sectionArea.classList.toggle('myBlur');
}

function closeAndOpen() {
  popupContainer.classList.toggle('flex');
  sectionArea.classList.toggle('myBlur');
  openPopupTwo();
}

function closePopup() {
  popupContainer.classList.toggle('flex');
  sectionArea.classList.toggle('myBlur');
}
function closePopupTwo() {
  popupContainerTwo.classList.toggle('flex');
  sectionArea.classList.toggle('myBlur');
}

function closePopupThree() {
  popupContainerTwo.classList.toggle('flex');
  sectionArea.classList.toggle('myBlur');
}