const hamburgerBtn = document.querySelector(".hamburger>span");
const navs = document.querySelector(".navs");
hamburgerBtn.addEventListener("click", () => {
  // Change hamburger menue to close
  hamburgerBtn.innerHTML === "menu"
    ? (hamburgerBtn.innerHTML = "close")
    : (hamburgerBtn.innerHTML = "menu");

  // Show navigation links

  hamburgerBtn.innerHTML === "close"
    ? (navs.style.display = "flex")
    : (navs.style.display = "none");
});
