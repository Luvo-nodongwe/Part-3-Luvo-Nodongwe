const quoteForm = document.getElementById("quote-form");

quoteForm.addEventListener("submit", function(e){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if(name.length < 3){
        alert("Name must contain at least 3 characters");
        e.preventDefault();
        return;
    }

    if(!email.includes("@")){
        alert("Enter a valid email");
        e.preventDefault();
    }

    if(phone.length < 10){
        alert("Enter a valid phone number");
        e.preventDefault();
    }

});

document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("UqM0_wcPRShGDTh10");

    const form = document.getElementById("quote-form");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.send("service_qpmo6ns", "template_rv88lii", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            service: document.getElementById("services").value,
            message: document.getElementById("message").value
        })
        .then(() => {
            alert("Sent!");
            form.reset();
        })
        .catch((err) => {
            console.error(err);
        });
    });

});