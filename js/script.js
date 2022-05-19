let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let element=document.querySelector(".heart");           
let circle=document.querySelector("#circle");
let container=document.getElementsByClassName("container");

//let before =window.getComputedStyle(element, ':before') 
//console.log(before.backgroundColor)

//console.log(getComputedStyle(document.querySelector('#heart'), ':before').getPropertyValue('content'));

//let styleElem = document.head.appendChild(document.createElement("style"));
//styleElem.innerHTML = ".heart:before{background:blue}";


//let elem_after = getComputedStyle(element, ':after')
//let elembefore =getComputedStyle(element, ':before')



button1.addEventListener("click",()=>{
    let intervalStop = setInterval(()=>{
    let letters = '0123456789ABCDEF';
    let colorss = "#";
    for (let i = 0; i < 6; i++) {
      colorss += letters[Math.floor(Math.random() * 16)];
    }
    
    circle.style.background=colorss
    element.style.setProperty('--beforeback','blue')
    element.style.background=colorss
    //elem_after.style.background = colorss 
    //elem_before.style.background = colorss 
  
  },1000)




button2.addEventListener("click",()=>{
    clearInterval(intervalStop )
    element.style.background = "#ffccff"
    circle.style.background="#ffccff"
})

})


/*
button1.addEventListener("click",()=>{
  

    let colors = ["pink","MediumVioletRed","Plum","BlueViolet", "Lime", "LightSkyBlue","DodgerBlue","MediumOrchid"];
    for (let i = 0; i < heart.length; i++) {
   heart[i].style.background = colors[Math.floor(Math.random() * colors.length)];
    }

 heart.style.background=colors




},2000)
*/


