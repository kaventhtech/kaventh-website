
document.addEventListener("DOMContentLoaded", function () {

  // CONTACT FORM VALIDATION
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const service = document.getElementById("service")?.value;
      const message = document.getElementById("message")?.value.trim();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !name ||
        !email ||
        !service ||
        !message ||
        !emailPattern.test(email)
      ) {
        event.preventDefault();
        formStatus.textContent =
          "Please complete all fields with a valid email.";
        return;
      }

      formStatus.textContent = "Sending your enquiry...";
    });
  }

  // AUTOMATIC COPYRIGHT YEAR
  const copyrightYear = document.getElementById("copyright-year");

  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  // SMOOTH SCROLLING
  const navigationLinks = document.querySelectorAll('a[href^="#"]');

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // HAMBURGER MENU
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {

    // Set the correct initial icon
    menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
    menuToggle.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("active") ? "true" : "false"
    );

    // Open and close menu
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      const isOpen = navLinks.classList.contains("active");

      menuToggle.textContent = isOpen ? "✕" : "☰";
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu after selecting a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

});
