function toggleMenu() {
  const menu = document.querySelector(".nav-bar .menu");
  const hamburger = document.querySelector(".hamburger");
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  menu.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", !expanded);
}

// Optional: Close menu when a link is clicked (for better UX on mobile)
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".nav-bar .menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.querySelector(".nav-bar .menu");
      const hamburger = document.querySelector(".hamburger");
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  });
});
