const burger = document.querySelector(".header__burger");
const menuBurger = document.querySelector(".header__menu");


burger.addEventListener("click", ()=>{
    burger.classList.toggle("active")
    menuBurger.classList.toggle("active")
})


const acordeon = document.querySelectorAll(".acordeon__side-tittel");

for (let index = 0; index < acordeon.length; index++) {
    const element = acordeon[index];
    element.addEventListener("click", () => {
        if(element.parentElement.parentElement.classList.contains(".active")){
            element.parentElement.parentElement.classList.remove("active")  
        }{
           acordeon.forEach(element => {
            element.parentElement.parentElement.classList.remove("active")
        });
        element.parentElement.parentElement.classList.add("active") 
        }
        
    })
    
}