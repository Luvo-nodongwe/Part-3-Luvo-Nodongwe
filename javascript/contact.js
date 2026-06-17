const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name.length < 3){
        alert("Name must contain at least 3 characters");
        e.preventDefault();
        return;
    }

    if(!email.includes("@")){
        alert("Enter a valid email");
        e.preventDefault();
    }

});

document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("UqM0_wcPRShGDTh10");

    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.send("service_k6eszjc", "template_61eox1p", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            inquiry: document.getElementById("inquiry").value,
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