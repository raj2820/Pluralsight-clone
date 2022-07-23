let form=document.querySelector("form")
form.addEventListener("submit",signinfunc)
let signinArr=JSON.parse(localStorage.getItem("signin"))||[]
let signupArr=JSON.parse(localStorage.getItem("signup"))||[]
function signinfunc(){
    event.preventDefault();
    if(signupArr.length===0){
        alert("No user till now")
        window.location.href="signup.html"
        return
    }else{
      
    }
    let signinObj={
email:form.email.value,
password:form.password.value,
    }
   signinArr.push(signinObj)
   localStorage.setItem("signin",JSON.stringify(signinArr))
   alert("Signin Successful")
    
    window.location.href="course.html"
}