
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const links = navLinks.querySelectorAll("a");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});