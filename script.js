const navigationToggler = document.querySelector(".mobile-menu__toggler");
const navigationMenu = document.querySelector(".navigation");
let isMenuVisible = false;

navigationToggler.addEventListener("click", () => {
  isMenuVisible = !isMenuVisible;
  toggleMenu();
});

function toggleMenu() {
  if (isMenuVisible) {
    navigationMenu.classList.add("navigation--visible");
    navigationToggler.children[0].src = "./assets/icons/close.png";
    navigationToggler.ariaLabel = "Fermer le menu de navigation";
    navigationToggler.ariaExpanded = "true";
  } else {
    navigationMenu.classList.remove("navigation--visible");
    navigationToggler.children[0].src = "./assets/icons/hamburger.png";
    navigationToggler.ariaLabel = "Ouvrir le menu de navigation";
    navigationToggler.ariaExpanded = "false";
  }
}
