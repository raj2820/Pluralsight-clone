let form=document.querySelector("form")

form.addEventListener("submit",signupFun)
let signupArr=JSON.parse(localStorage.getItem("signup"))||[]
function signupFun(){
    event.preventDefault()
    if(form.email.value!=form.confirmemail.value && form.confirmpassword.value!=form.password.value ){
        alert("email and password not correct !")
        return
    }else if(form.confirmpassword.value!=form.password.value){
        alert("password not correct");
        return
    }else if (form.email.value!=form.confirmemail.value ){
        alert("email not correct")
        return
    }else{
        let signupObj={
            name:form.name.value,
            lastname:form.lastname.value,
            email:form.email.value,
            confirmemail:form.confirmemail.value,
            password:form.password.value,
            confirmpassword:form.confirmpassword.value,
        }
        
        signupArr.push(signupObj)
        localStorage.setItem("signup",JSON.stringify(signupArr))
        alert("Account created successfuly !")
        window.location.href="signin.html"
    }

}