const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();

    if(name.length < 3){
        alert("Name must contain at least 3 characters");
        return;
    }

    if(!email.includes("@")){
        alert("Enter a valid email");
        return;
    }

    // EmailJS call goes here
});