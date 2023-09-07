const error = document.getElementById("errorMsg");
const button = document.getElementById("submit");
const input = document.getElementById("emailAd");
const successCard = document.querySelector(".successCard");
const mainCard = document.querySelector(".card");

button.addEventListener("click", (e)=> {
    e.preventDefault();
    const email = input.value;
    
    if (isValidEmail(email)) {
    error.style.visibility = "hidden";
    input.classList.remove("active");
    successCard.style.visibility = "visible";
    mainCard.style.visibility = "hidden";
    } else {
    error.style.visibility = "visible";
    input.classList.add("active");
    };
});

function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
};
