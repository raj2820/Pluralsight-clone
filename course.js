let signinArr=JSON.parse(localStorage.getItem("signin"))||[]
if(signinArr.length===0){
  alert("Please LogIn !")
  window.location.href="signin.html"

}


let courseData=[
{
    name:"Getting started with linux administration",
    level:"Beginner",
    subject:"ITOps",
    productID:1,
    price:1400
},
{
    name:"Maintaining,Monitoring and Troubleshooting Kubernetes",
    level:"Intermediate",
    subject:"SoftwareDevelopment",
    productID:2,
    price:1400
},
{
    name:"Agile in the Real World",
    level:"Intermediated",
    subject:"ITOps",
    productID:3,
    price:1400
},
{
    name:"Risk Assessment and Management",
    level:"Intermediate",
    subject:"WebDevelopment",
    productID:4,
    price:1400
},
{
    name:"Introduction to Networking for Close CCNA",
    level:"Beginner",
    subject:"ItOps",
    productID:5,
    price:1400
},
{
    name:"Delivering Value Quickly with ICAgile",
    level:"Beginner",
    subject:"SoftwareDevelopment",
    productID:6,
    price:1400
},
{
    name:"Introduction to the BABOK Guide and Business Analysis Key Terms",
    level:"Advanced",
    subject:"SoftwareDevelopment",
    productID:7,
    price:1400
},
{
    name:"Monitoring and Event Response on AWS for DevOps Engineers",
    level:"Advanced",
    subject:"WebDevelopment",
    productID:8,
    price:1400
},
{
    name:"Analyzing Data on AWS",
    level:"Beginner",
    subject:"ITOps",
    productID:9,
    price:1400
},
{
    name:"Getting started with linux administration",
    level:"Beginner",
    subject:"WebDevelopment",
    productID:10,
    price:1400
},
{
    name:"Maintaining,Monitoring and Troubleshooting Kubernetes",
    level:"Intermediate",
    subject:"ITOps",
    productID:11,
    price:1400
},
{
    name:"Agile in the Real World",
    level:"Intermediated",
    subject:"SoftwareDevelopment",
    productID:12,
    price:1400
},
{
    name:"Risk Assessment and Management",
    level:"Intermediate",
    subject:"WebDevelopment",
    productID:13,
    price:1400
},
{
    name:"Introduction to Networking for Close CCNA",
    level:"Beginner",
    subject:"SoftwareDevelopment",
    productID:14,
    price:1400
},
{
    name:"Delivering Value Quickly with ICAgile",
    level:"Beginner",
    subject:"ITOps",
    productID:15,
    price:1400
},
{
    name:"Introduction to the BABOK Guide and Business Analysis Key Terms",
    level:"Advanced",
    subject:"WebDevelopment",
    productID:16,
    price:1400
},
{
    name:"Monitoring and Event Response on AWS for DevOps Engineers",
    level:"Advanced",
    subject:"ITOps",
    productID:17,
    price:1400
},
{
    name:"Analyzing Data on AWS",
    level:"Beginner",
    subject:"SoftwareDevelopment",
    productID:18,
    price:1400
},
]
let filtering=document.querySelector("#filter")
let filtering2=document.querySelector("#filter2")
let cartArr=JSON.parse(localStorage.getItem("addedtocart"))||[]
function display(data){
document.querySelector("#parent").innerHTML=""
data.forEach(function(ele){

let product=document.createElement("div");
let name=document.createElement("h2")
name.innerText=ele.name;

let level=document.createElement("h4")
level.innerText=ele.level;

let cart=document.createElement("button");
cart.innerText="Add to Cart"
cart.addEventListener("click",function(){
    addtocart(ele);
})
let hr=document.createElement("hr")

product.append(name,level,cart,hr)
document.querySelector("#parent").append(product)

});



}
display(courseData)

function addtocart(product){
    for(let i=0;i<cartArr.length;i++){
        if (cartArr[i].productID==product.productID){
            alert("product already in the Cart")
            return
        }
    }
cartArr.push(product)
alert("product added successfuly")
 localStorage.setItem("addedtocart",JSON.stringify(cartArr))
}




filtering.addEventListener("change",function(){
    if(filtering.value===""){
        display(courseData)
    }else{
        let filtered=courseData.filter(function(ele){
      
            {
                return ele.level===filtering.value;
            }
        });
        display(filtered)
    }
 
});

filtering2.addEventListener("change",function(){
    if(filtering2.value===""){
        display(courseData)
    }else{
        let filtered2=courseData.filter(function(ele){
      
            {
                return ele.subject===filtering2.value;
            }
        });
        display(filtered2)
    }
 
});

document.querySelector("button").addEventListener("click",function(){
   cartredirect()
})

