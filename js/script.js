let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let element=document.querySelector("#heart");
let container=document.getElementsByClassName("container")
console.log(getComputedStyle(document.querySelector('#heart'), ':before').getPropertyValue('content'));


button1.addEventListener("click",()=>{
    let intervalStop = setInterval(()=>{
    let letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
   
    element.style.background=color
    circle.style.background=color
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


