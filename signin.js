let form=document.querySelector("form")
form.addEventListener("submit",signinfunc)

function signinfunc(){
    event.preventDefault();
    let signinObj={
email:form.email.value,
password:form.password.value,
    }
    console.log(signinObj)
    
}