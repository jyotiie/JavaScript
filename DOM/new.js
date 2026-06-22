

let para=document.querySelector("p");
console.log(para.getAttribute("class"));

//new

let newBtn=document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

let div=document.querySelector("div");
div.append(newBtn);

let newHeading=document.createElement("hi");
newHeading.innerHTML="<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);
