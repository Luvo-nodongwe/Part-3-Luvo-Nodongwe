const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.2
});

reveals.forEach(el => observer.observe(el));

emailjs.init("UqM0_wcPRShGDTh10");
document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("UqM0_wcPRShGDTh10");
console.log("FORM WORKING");
    const contactForm = document.getElementById("contact-form");
    const quoteForm = document.getElementById("quote-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            console.log("Contact form submitted"); // DEBUG

            const data = {
                form_type: "Contact Form",
                user_name: document.getElementById("contact-name").value,
                user_email: document.getElementById("contact-email").value,
                inquiry: document.getElementById("inquiry").value,
                message: document.getElementById("message").value
            };

            sendEmail(data);
        });
    }

    if (quoteForm) {
        quoteForm.addEventListener("submit", function(e) {
            e.preventDefault();

            console.log("Quote form submitted"); // DEBUG

            const data = {
                form_type: "Quote Request",
                user_name: document.getElementById("quote-name").value,
                user_email: document.getElementById("quote-email").value,
                phone: document.getElementById("quote-phone").value,
                service: document.getElementById("services").value,
                message: document.getElementById("message").value
            };

            sendEmail(data);
        });
    }

});

function sendEmail(data) {

    emailjs.send("service_k6eszjc", "template_rv88lii", data)
    .then(() => {
        return emailjs.send("service_k6eszjc", "template_61eox1p", data);
    })
    .then(() => {
        alert("Message sent successfully!");
    })
    .catch((err) => {
        console.error("EmailJS Error:", err);
    });

}