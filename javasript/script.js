const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const form = document.querySelector("#form-container");

form.addEventListener("submit", function(e){

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name.length < 3){
        alert("Name must contain at least 3 characters");
        e.preventDefault();
        return;
    }

    if(!email.includes("@")){
        alert("Please enter a valid email");
        e.preventDefault();
        return;
    }

    alert("Message sent successfully!");
});

const quoteForm = document.querySelector("form");

quoteForm.addEventListener("submit", function(e){

    const phone = document.getElementById("phone").value;

    if(phone.length < 10){
        alert("Enter a valid phone number");
        e.preventDefault();
    }
});