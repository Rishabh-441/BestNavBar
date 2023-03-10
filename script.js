const check = document.getElementById("check");
const menu = document.getElementById("menu");
const links = document.getElementById('links');
const lists = document.querySelectorAll('li');

menu.addEventListener('click', adjust);
// window.onload(fresh);
function adjust () {
    if (check.checked == false) {
        links.style.display = "block";
        menu.innerText = "menu_open";
    }
    else {
        links.style.display = "none";
        menu.innerText = "menu";
    }
}

window.addEventListener("resize", sizecheck);
function sizecheck() {
    if (window.innerWidth > 960) {
        links.style.display = "flex";
        check.checked = false;
        menu.innerText = "menu";
    }
    if (window.innerWidth <= 960 && check.checked == false) {
        menu.innerText = "menu";
        links.style.display = "none";
    }
}
