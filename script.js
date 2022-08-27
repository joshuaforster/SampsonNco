const hamburger = document.querySelector(".hamburger");
const menucontainer = document.querySelector(".menucontainer");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    menucontainer.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click",() => {
    hamburger.classList.remove("active");
    menucontainer.classList.remove("active");
}))