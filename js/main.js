// --- Smooth scroll to anchors -----///

const navMenu = document.querySelector(".nav-left__menu");
navMenu.addEventListener("click", function (e) {
  e.preventDefault();
  const blockID = e.target.getAttribute("href");
  if (blockID) {
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});
