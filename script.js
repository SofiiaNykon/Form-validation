const form = document.querySelector(".form");
const inputFields = form.getElementsByClassName("form-control");

for (const item of inputFields) {
  item.addEventListener("blur", (event) => {
    validateForm(event);
  });
}


// required.value = ^[a-z0-9]/@[a-z]\.[a-z]{2,3}$;
// email.onclick (){
//     if(email === required){
//         email.className = "valid";
//     }else{
//         email.className = "error" 
//     }
// }
