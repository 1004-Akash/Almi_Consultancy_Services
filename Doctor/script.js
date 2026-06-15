const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert(
        "Thank you for contacting ALMI Digital Marketing. Our team will contact you shortly."
    );

    form.reset();

});