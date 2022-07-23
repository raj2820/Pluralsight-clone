let cartArr=JSON.parse(localStorage.getItem("addedtocart"))||[]
let total=document.getElementById("total")
display(cartArr);
function display(cartArr){
    document.querySelector("#parent").innerHTML=""
    let sum=0
cartArr.forEach(function(ele,index){
    sum+=Number(ele.price);

    let product=document.createElement("div");
    let name=document.createElement("h2")
    name.innerText=ele.name;
    
    let level=document.createElement("h4")
    level.innerText=ele.level;
let del=document.createElement("button");
del.innerText="Delete"
del.addEventListener("click",function(){
    deletecart(index);
}) 

let hr=document.createElement("hr")

product.append(name,level,hr,del)
document.querySelector("#parent").append(product)


})
total.innerText=sum
}


function deletecart(index){
    cartArr.splice(index,1)
    display(cartArr)
    localStorage.setItem("addedtocart",JSON.stringify(cartArr))
}