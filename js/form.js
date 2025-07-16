 const error =document.getElementsByClassName("error")

 function handleClearForm() {
    for(let i=0; i> error.length; i++){
        error[i].innerHTML = "";
    }
 }
 

 function handleSubmit(){

    const name = document.reg.name.value.trim() 

    const username = document.reg.username.value.trim()

    const email = document.reg.email.value.trim()

    const phone = document.reg.phone.value.trim()

    const password = document.reg.password.value.trim()

    const cofirmpassword = document.reg.confirmpassword.value.trim()

    console.log(name , username , email, phone, password, cofirmpassword   )

    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/

    if(name == "") {
        error[0].innerHTML = "Name is required"
        return false;
    }
    if(name .length < 3 || name.length > 20){
        error[0].innerHTML = "Name must be between 3 and 20 characters"
        return false;
    }
    if(username == ""){
        error[1].innerHTML = "Username is required"
        return false ;
    }
    if(username.length < 3 || username.length > 20){
        error[1].innerHTML = "Username must be between 3 and 20 characters"
        return false;
    }
    if(email == ""){
        error[2].innerHTML = "Email is required"
        return false;
    } 
    if(!emailregex.test(email)){
        error[2].innerHTML = "Email is not valid"
        return false;
    }
    if(phone == ""){
        error[3].innerHTML = "Phone is required"
        return false;
    }
    if(phone.length != 10){
        error[3].innerHTML = "Phone must be 10 digits"
        return false;
    }
    if(password == ""){
        error[4].innerHTML = "Password is required"
        return false;
    }
    if(confirmpassword == ""){
        error[5].innerHTML = "Confirm Password is required"
        return false;
    }
    alert("Form submitted successfully")
    return false;
}

