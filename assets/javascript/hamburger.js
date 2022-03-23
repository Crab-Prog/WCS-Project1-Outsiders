const boutonJS = document.getElementById("icon")
boutonJS.addEventListener("click", hamburger)


function hamburger() {
    const menu = document.getElementById("links");
    menu.classList.toggle('displayed');
}