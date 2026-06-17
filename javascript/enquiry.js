const quoteForm = document.getElementById("quote-form");

quoteForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("quote-name").value.trim();
    const email = document.getElementById("quote-email").value.trim();
    const phone = document.getElementById("quote-phone").value.trim();

    if(name.length < 3){
        alert("Name must contain at least 3 characters");
        return;
    }

    if(!email.includes("@")){
        alert("Enter a valid email");
        return;
    }

    if(phone.length < 10){
        alert("Enter a valid phone number");
        return;
    }

    // EmailJS call goes here
});