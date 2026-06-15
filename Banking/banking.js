const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
});

window.dispatchEvent(new Event("scroll"));
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert(
    "Thank you for contacting Almi Consultancy Services. Our team will reach out to you shortly.",
  );

  form.reset();
});
