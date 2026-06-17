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

emailjs.init("UqM0_wcPRShGDTh10");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector("button");

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    emailjs.send(
        "service_k6eszjc",
        "template_61eox1p",
        {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            inquiry: document.getElementById("inquiry").value,
            message: document.getElementById("message").value
        }
    )
    .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
    });
});