

// Navbar-sticky
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav-bar");

  if (window.scrollY > 100) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
});

// Get button
const topBtn = document.querySelector(".top-btn");

// When the user scrolls down 300px from the top of the document, show the button.
window.addEventListener("scroll", () => {
  const topBtn = document.querySelector(".top-btn");

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// When the user clicks on the button, page scrolls to the top of the document.
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

