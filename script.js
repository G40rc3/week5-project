document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbar = document.querySelector(".navbar");

  navbarToggle.addEventListener("click", () => {
    const currentLeft = navbar.style.left;
    navbar.style.left = currentLeft === "0px" ? "-110px" : "0px";

    navbarToggle.classList.toggle("open");
  });
});
