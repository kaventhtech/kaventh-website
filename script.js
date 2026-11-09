

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !service || !message ||
        !emailPattern.test(email)) {
      event.preventDefault();
      formStatus.textContent = "Please complete all fields with a valid email.";
      return;
    }

    formStatus.textContent = "Sending your enquiry...";
  });
}
