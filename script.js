function menu(){
    let hamburger = document.querySelector(".hamburger");
    let navMenu = document.querySelector(".nav-menu");
    
    
    hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    })
    
    
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    }))
    
    }
    
    menu();


    document.addEventListener('scroll', ()=>{
      let navBar = document.getElementById("front");
  
  
  
      if( window.innerWidth > 100){
          if (window.scrollY > 150){
          
              navBar.style.display= "none";
          } else{
              navBar.style.display= "inline-block";
          }
      }
  })
  
  document.addEventListener('scroll', ()=>{
    let navBar2 = document.getElementById("header");
    let menu = document.getElementById("menu");
    let naam = document.getElementById("naam");



    if( window.innerWidth > 100){
        if (window.scrollY > 500){
        
            navBar2.style.backgroundColor= "#443C7D";
            menu.style.backgroundColor= "#443C7D";
            
            

        } else{
            navBar2.style.backgroundColor= "#C0BDFC ";
            menu.style.backgroundColor= "#C0BDFC ";
            naam.style.Color= "white";
        }
    }
})


const textElement = document.getElementById('dynamic-text');
const textToWrite = ' mijn naam is Loeki Jannink'; // Replace with your name

let index = 0;

function writeText() {
    if (index < textToWrite.length) {
        textElement.textContent += textToWrite.charAt(index);
        index++;
        setTimeout(writeText, 100); // Adjust the speed of writing
    }
}



writeText();


