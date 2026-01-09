//Collapsed navbar script

const toggle = document.querySelector(".toggle-menu")
const menu = document.querySelector(".nav")

toggle.addEventListener("click", () => {
    menu.classList.toggle("active")
    e.stopPropagation();
})

//Close menu with click outside it
document.addEventListener("click", (e) => {
    if (menu.classList.contains("active") && !menu.contains(e.target) && e.target !== toggle) {
        menu.classList.remove("active");
    }
})
