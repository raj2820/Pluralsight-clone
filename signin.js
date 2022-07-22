let form=document.querySelector("form")
form.addEventListener("submit",signinfunc)
let signinArr=JSON.parse(localStorage.getItem("signin"))||[]
function signinfunc(){
    event.preventDefault();
    let signinObj={
email:form.email.value,
password:form.password.value,
    }
   signinArr.push(signinObj)
    localStorage.setItem("signin",JSON.stringify(signinArr))
}