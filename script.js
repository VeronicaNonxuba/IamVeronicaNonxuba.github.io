// You can add JavaScript code here to handle:
// - Smooth scrolling to sections when clicking navigation links
// - Form validation and submission
// - Any other interactive elements you want to add.

// Example: Smooth scrolling
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});
