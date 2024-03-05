let burger = document.getElementById("burger");
let nav = document.getElementById("header-nav");
let lang = document.getElementById("header-lang");

function burgerToggle(){ 
    burger.classList.toggle("burger--clicked");
    nav.classList.toggle("nav--opened");
    lang.classList.toggle("lang--shown");
}

//OUTSIDE CLICK

document.addEventListener('click', function(event) {

    // Check if the navigation is open
    if (nav.classList.contains("nav--opened")) {
        // Check if the click is outside the nav and burger
        if (!nav.contains(event.target) && !burger.contains(event.target) && !lang.contains(event.target)) {
            // Close the nav
            nav.classList.remove("nav--opened");
            burger.classList.remove("burger--clicked");
            lang.classList.remove("lang--shown"); 
        }
    }
});