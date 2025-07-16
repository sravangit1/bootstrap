const error =document.getElementsByClassName("error");

function handleClearForm() {
    for(let i=0; i< error.length; i++){
        error[i].innerHTML = "";
    } 
}
function handleSubmit(){

    const log = document.reg.log.value.trim();

    const logpass = document.reg.logpass.value.trim();

     console.log(log , logpass)

    const logpassRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/

    if(log==""){
        error[0].innerHTML = "Email is required";
        return false;
    }
    if(logpass==""){
        error[1].innerHTML = "Password is required";
        return false;
    }
    if(!logpassRegex.test(logpass)){
        error[1].innerHTML = "Password must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        return false;
    }

   alert("Login successful!");
    return false;
    
}
