
function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  const overlay = document.getElementById('overlay');
  const isOpen = menu.style.left === "0px";

  if (isOpen) {
    menu.style.left = "-260px";
    overlay.style.display = "none";
  } else {
    menu.style.left = "0px";
    overlay.style.display = "block";
  }
}