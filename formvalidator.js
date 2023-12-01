const username = document.getElementById("name");
const password = document.getElementById("Password");
const confirmpass = document.getElementById("ConfirmPass");
const form= document.getElementById("form");

function showError(input, msg){
    const inpuMsg = input.parentElement;
    inpuMsg.className = "formContol error";
    const small=inpuMsg.querySelector("small");
    small.innerText = msg;
}

function showSuccess(input){
    const inpuMsg = input.parentElement;
    inpuMsg.className = "formContol success";
}

function checkUsername(){
    if(username.value ===""){
        showError(username,"Username is required");
    }else{
        showSuccess(username);
    }
}

function checkPassword(){
    if(password.value ===""){
        showError(password,"Password is required");
    }else{
        showSuccess(password);
    }
}
function checkConfirmPassword(){
    if(confirmpass.value ===""){
        showError(confirmpass,"Please confirm the password");
    }else{
        showSuccess(confirmpass);
    }
}

function checkPasswordMatch(){
    if(password.value!== confirmpass.value){
        showError(confirmpass,"Passwords do not match");
    }
}

form.addEventListener("submit",function(e) {
e.preventDefault();
checkUsername();
checkPassword();
checkConfirmPassword();
checkPasswordMatch();
});
