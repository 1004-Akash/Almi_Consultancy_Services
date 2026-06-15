
/* ==========================================
   CONSULTPRO - SOLAR SERVICES
   script.js
========================================== */

/* ==========================
   STICKY NAVBAR
========================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


/* ==========================
   CLOSE MOBILE MENU ON CLICK
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });

});


/* ==========================
   SMOOTH SCROLLING
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });

        }

    });

});


/* ==========================
   SECTION REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(section => {
    revealObserver.observe(section);
});


/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

const counterObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !counterStarted) {

                counterStarted = true;

                counters.forEach(counter => {

                    const target =
                        +counter.getAttribute("data-target");

                    let count = 0;

                    const increment = target / 100;

                    const updateCounter = () => {

                        if (count < target) {

                            count += increment;

                            counter.innerText =
                                Math.ceil(count);

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.innerText = target + "+";

                        }

                    };

                    updateCounter();

                });

            }

        });

    },

    {
        threshold: 0.4
    }

);

const statsSection =
    document.querySelector(".stats");

if (statsSection) {
    counterObserver.observe(statsSection);
}


/* ==========================
   HERO PARALLAX EFFECT
========================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scrollPosition = window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =
            `${scrollPosition * 0.4}px`;

    }

});


/* ==========================
   CONTACT FORM ANIMATION
========================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const button =
            this.querySelector("button");

        const originalText =
            button.innerHTML;

        button.innerHTML =
            '<i class="fa-solid fa-check"></i> Message Sent';

        button.style.background =
            "#1591DC";

        button.disabled = true;

        setTimeout(() => {

            button.innerHTML =
                originalText;

            button.disabled = false;

            button.style.background =
                "#2C5EAD";

            form.reset();

        }, 3000);

    });

}


/* ==========================
   FEATURE CARD STAGGER EFFECT
========================== */

const featureCards =
    document.querySelectorAll(".feature-card");

const cardObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                featureCards.forEach(
                    (card, index) => {

                        setTimeout(() => {

                            card.style.opacity = "1";
                            card.style.transform =
                                "translateY(0)";

                        }, index * 150);

                    }
                );

            }

        });

    },

    {
        threshold: 0.2
    }

);

if (featureCards.length > 0) {

    featureCards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform =
            "translateY(50px)";
        card.style.transition =
            "all 0.8s ease";

    });

    cardObserver.observe(featureCards[0]);
}


/* ==========================
   HERO BUTTON GLOW EFFECT
========================== */

const ctaBtn =
    document.querySelector(".cta-btn");

if (ctaBtn) {

    setInterval(() => {

        ctaBtn.classList.add("pulse");

        setTimeout(() => {

            ctaBtn.classList.remove("pulse");

        }, 1000);

    }, 4000);

}


/* ==========================
   ACTIVE NAV LINK ON SCROLL
========================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active-link");

        }

    });

});


/* ==========================
   LOADING ANIMATION
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
    "%c☀ ConsultPro Solar Services Loaded Successfully",
    "color:#1591DC;font-size:14px;font-weight:bold;"
);

