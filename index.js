var sidenav = document.querySelector(".side-navbar");

function showNavbar() {
    sidenav.style.left = "0"
}

function closeNavbar() {
    sidenav.style.left = "-60%"; // Hides the side navbar off the screen
}

