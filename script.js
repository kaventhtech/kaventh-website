
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

      if (!targetId || targetId === "#") {
        return;
      }

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
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && menuIcon && navLinks) {

    function updateMenu(isOpen) {

      menuIcon.textContent = isOpen ? "✕" : "☰";

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    }

    function openMenu() {
      navLinks.classList.add("active");
      updateMenu(true);
    }

    function closeMenu() {
      navLinks.classList.remove("active");
      updateMenu(false);
    }

    // Set the initial menu state
    closeMenu();

    // Open or close when the button is tapped
    menuToggle.addEventListener("click", function () {

      const isOpen = navLinks.classList.contains("active");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu after selecting a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    // Close menu when Escape is pressed
    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Close mobile menu when returning to desktop width
    window.addEventListener("resize", function () {

      if (window.innerWidth > 650) {
        closeMenu();
      }
    });
  }

});
