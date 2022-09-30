export function showError(element,errorMessage){
    const errorBox = document.querySelector("small");
    errorBox.innerText = errorMessage;
    element.className="error";
    errorBox.classList.add('error');
    return false;
}


export function validatePassword(element){
    const passwordRegEx =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/
    const password = element.value.trim();
    if(!passwordRegEx.test(password)){
      return showError(element, "Password must be alphanumeric, contains a mix of small and capital letter");
    } 
    
       return true;
}