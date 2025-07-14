// function toggleMenu() {
//   const menu = document.querySelector(".nav-bar .menu");
//   const hamburger = document.querySelector(".hamburger");
//   const expanded = hamburger.getAttribute("aria-expanded") === "true";
//   menu.classList.toggle("active");
//   hamburger.setAttribute("aria-expanded", !expanded);
// }

// // Optional: Close menu when a link is clicked (for better UX on mobile)
// document.addEventListener("DOMContentLoaded", function () {
//   const menuLinks = document.querySelectorAll(".nav-bar .menu a");
//   menuLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       const menu = document.querySelector(".nav-bar .menu");
//       const hamburger = document.querySelector(".hamburger");
//       if (menu.classList.contains("active")) {
//         menu.classList.remove("active");
//         hamburger.setAttribute("aria-expanded", "false");
//       }
//     });
//   });
// });
// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".nav-bar .menu");
  const hamburger = document.querySelector(".hamburger");
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  menu.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", !expanded);
}

// Dropdown toggle for mobile
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".nav-bar .menu .dropdown");
  const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

  dropdownToggle.addEventListener("click", function (e) {
    // Only toggle on mobile
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle("active-dropdown");
      // Accessibility
      const expanded = dropdownToggle.getAttribute("aria-expanded") === "true";
      dropdownToggle.setAttribute("aria-expanded", !expanded);
    }
  });

  // Optional: close dropdown when clicking outside (mobile)
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth <= 768 &&
      !dropdown.contains(e.target) &&
      !e.target.classList.contains("dropdown-toggle")
    ) {
      dropdown.classList.remove("active-dropdown");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });
});
