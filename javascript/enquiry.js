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

