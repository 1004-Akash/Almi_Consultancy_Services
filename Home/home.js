// =============================
// SCROLL REVEAL ANIMATION
// =============================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// =============================
// STAGGER CARD ANIMATION
// =============================

const animatedCards = document.querySelectorAll(
  ".importance-card, .benefit-card, .service-card, .why-card",
);

animatedCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.08}s`;
});

// =============================
// NAVBAR SCROLL EFFECT
// =============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255,255,255,0.98)";
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.95)";
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
  }
});

// =============================
// ACTIVE NAVIGATION LINK
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("nav-active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("nav-active");
    }
  });
});

// =============================
// CONTACT FORM
// =============================

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;

    alert(
      `Thank you ${name}!\n\nYour message has been received successfully.\nOur team from Almi Consultancy Services will contact you shortly.`,
    );

    form.reset();
  });
}

// =============================
// SMOOTH BUTTON HOVER EFFECT
// =============================

const buttons = document.querySelectorAll(
  ".primary-btn, .secondary-btn, .nav-btn, .send-btn",
);

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0px)";
  });
});

// =============================
// HERO FADE-IN ON LOAD
// =============================

window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");

  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(40px)";

    setTimeout(() => {
      heroContent.style.transition = "all 1s ease";

      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0px)";
    }, 200);
  }
});

// =============================
// PARALLAX HERO EFFECT
// =============================

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");

  if (hero) {
    const scrollPosition = window.pageYOffset;

    hero.style.backgroundPositionY = scrollPosition * 0.4 + "px";
  }
});

// =============================
// CONSOLE MESSAGE
// =============================

console.log(
  "%cAlmi Consultancy Services",
  "color:#2C5EAD;font-size:20px;font-weight:bold;",
);

console.log("%cWebsite loaded successfully.", "color:#1591DC;font-size:14px;");
