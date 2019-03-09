window.onscroll = function() { scrollFunction()};
const menu = document.getElementById("menu");
var sticky = menu.offsetTop;
function scrollFunction() {
    if (window.pageYOffset > sticky) {
        menu.classList.add("fix");
    } else {
        menu.classList.remove("fix");
    }
}