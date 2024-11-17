const requestUrl = "https://formsubmit.co/veronical.nonxuba@gmail.com";
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

function sendData() {
  let formBody = [
    "name=" + encodeURIComponent(document.getElementById("name").value),
    "email=" + encodeURIComponent(document.getElementById("email").value),
    "message=" + encodeURIComponent(document.getElementById("message").value),
    "next=" + encodeURIComponent(document.getElementsByName("_next").value),
  ].join("&");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", requestUrl);

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (xhr.status === 200) {
      window.location = "./thanks.html";
      return;
    }
    alert("An error occured");
  };

  xhr.send(formBody);
}
