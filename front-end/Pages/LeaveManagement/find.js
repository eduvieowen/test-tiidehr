function findValue(value) {
    openPopup()
    details = JSON.parse(localStorage.getItem("details") || "[]");

    for (var key in details) {
        if (details[key] == value) {
            document.querySelector(".leaveType").value = value.leave;
            document.querySelector(".duration").value = value.duration;
            document.querySelector(".description").value = value.description; 
        }
        break;
    }
}