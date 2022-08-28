var nav = document.getElementById('navlist');
function toggleNav() {       
    if ( nav.style.display === "" )
    { 
        nav.style.display = "block"
    }
    else
    {
    nav.style.display = "";
}
}
function windowResizeHandler() {
    if ( screen.width > 500 ){
    nav.style.display = "";
}
window.addEventListener("resize", windowResizeHandler);
}
