// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    navbar.style.background = '#ffffff';
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
});

// Fade In Animation
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// Active Navbar Link
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if(link.getAttribute('href') === '#' + current){
            link.classList.add('active');
        }
    });

});

// Contact Form
const form = document.querySelector('.contact-form');

if(form){
    form.addEventListener('submit', function(e){

        e.preventDefault();

        alert('Thank you! Your inquiry has been submitted successfully.');

        form.reset();
    });
}

// Hero Button Animation
const btn = document.querySelector('.btn');

if(btn){
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-5px) scale(1.05)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
}

console.log("Civil Web Solutions Website Loaded Successfully 🚀");