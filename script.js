const form = document.querySelector(".form");
const inputFields = form.getElementsByClassName("form-control");

for (const item of inputFields) {
  item.addEventListener("blur", (event) => {
    validateForm(event);
  });
}
const setError=(element, message)=>{
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = message;
    element.classList.add("invalid");
    element.classList.remove("valid");
};
const setValid =element=>{
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = "";
    element.classList.remove("invalid");
    element.classList.add("valid");
}

const validateEmail =(email)=>{
    const regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if(email.value ===""){
        setError(email, "Email is required");
    }else if(!regexEmail.test(email.value)){
        setError(email, "Email is incorrect");
    }else{
        setValid(email);
    }
}

const validatePassword =(password)=>{
    const  regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(password.value===""){
        setError(password, "Email is required");
    }else if(!regexPassword.test(password.value)){
        setError(password, "Password must contain at least 8 symbols, one digit and one special character");
    }else setValid(password);
}

const validatePasswordConfirm = (passwordConfirm) => {
    if (passwordConfirm.value === "") {
      setError(passwordConfirm, "Confirmation password is required");
    } else if (passwordConfirm.value !== password.value) {
      setError(passwordConfirm, "Password doesn't match!");
    } else {
      setValid(passwordConfirm);
    }
  };

const validateForm = (event) =>{
    switch(event.target.id){
        case "email":
            validateEmail(event.target);
            break;
            case "password":
                validatePassword(event.target);
                break;
                case "passwordConfirm":
                    validatePasswordConfirm(event.target);
                    break;
                    default:
                        alert("Validation error!")

    }
};
