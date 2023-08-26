let button = document.getElementById("toggle-button");
let hamIcon = document.getElementById("ham-icon");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");

button.onclick = function () {
  overlay.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");

  if (hamIcon.getAttribute("src").endsWith("menu.svg")) {
    hamIcon.src = "./assets/images/icon-menu-close.svg";
  } else {
    hamIcon.src = "./assets/images/icon-menu.svg";
  }
};
