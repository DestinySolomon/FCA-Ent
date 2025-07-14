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

// --- NEW: Dropdown Toggle Clicks ---
dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior (e.g., navigating to #)

    const parentDropdown = this.closest(".dropdown"); // Get the parent <li> with class 'dropdown'
    const isExpanded = this.getAttribute("aria-expanded") === "true";

    // Toggle the 'active-dropdown' class on the parent <li>
    parentDropdown.classList.toggle("active-dropdown");

    // Update ARIA attribute for accessibility
    this.setAttribute("aria-expanded", !isExpanded);

    // Optional: Close other open dropdowns in the same menu level
    document
      .querySelectorAll(".nav-bar .menu .dropdown.active-dropdown")
      .forEach((otherDropdown) => {
        if (otherDropdown !== parentDropdown) {
          // If it's not the current dropdown
          otherDropdown.classList.remove("active-dropdown");
          otherDropdown
            .querySelector(".dropdown-toggle")
            .setAttribute("aria-expanded", "false");
        }
      });
  });
});

// --- NEW: Close Main Menu and Dropdowns on outside click ---
document.addEventListener("click", function (event) {
  // Check if the click is outside the main menu and hamburger button
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
    // Close any open dropdowns
    document
      .querySelectorAll(".nav-bar .menu .dropdown.active-dropdown")
      .forEach((dropdown) => {
        dropdown.classList.remove("active-dropdown");
        dropdown
          .querySelector(".dropdown-toggle")
          .setAttribute("aria-expanded", "false");
      });
  }
});
