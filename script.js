// Example: Smooth scrolling
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // No smooth scrolling needed here.
    window.location.href = this.getAttribute("href");
  });
});

// navLinks.forEach((link) => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
//     const targetId = this.getAttribute("href");
//     const targetElement = document.querySelector(targetId);
//     targetElement.scrollIntoView({ behavior: "smooth" });
//   });
// });
