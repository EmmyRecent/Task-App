// this is the script for navbar 
const mobileBtn = document.getElementById("menu-icon")
      nav = document.querySelector("nav")
      mobileBtnExit = document.getElementById("close-icon");

// adding event listener for the menu-icon
mobileBtn.addEventListener("click", () => {
    nav.classList.add("menu-btn");
})

// adding event listener for the close-icon 
mobileBtnExit.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
})