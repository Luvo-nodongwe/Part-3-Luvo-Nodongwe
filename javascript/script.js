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


document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("UqM0_wcPRShGDTh10");
console.log("FORM WORKING");
    const contactForm = document.getElementById("contact-form");
    const quoteForm = document.getElementById("quote-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            console.log("Contact form submitted"); // DEBUG
const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const inquiry = document.getElementById("inquiry").value.trim();
const message = document.getElementById("message").value.trim();
        if(name.length < 3){
            alert("Name must contain at least 3 characters");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){
            alert("Please enter a valid email address");
            return;
        }
        if(inquiry.length < 5){
            alert("Inquiry must contain at least 5 characters");
            return;
        }

        if(message.length < 10){
            alert("Message must contain at least 10 characters");
            return;
        }

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
const name = document.getElementById("quote-name").value.trim();
    const email = document.getElementById("quote-email").value.trim();
    const phone = document.getElementById("quote-phone").value.trim();
    const service = document.getElementById("services").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name.length < 3){
        alert("Name must contain at least 3 characters");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address");
        return;
    }
    if(phone.length < 10){
        alert("Phone number must contain at least 10 digits");
        return;
    }
    if(service.length < 5){
        alert("Please select a service");
        return;
    }
    if(message.length < 10){
        alert("Message must contain at least 10 characters");
        return;
    }
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
        alert("Message sent successfully!");
        form.reset();
    })
    .catch((err) => {
        console.error("EmailJS Error:", err);
    });

}

