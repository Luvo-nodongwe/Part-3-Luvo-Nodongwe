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