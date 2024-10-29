document.querySelector(".cta-button").addEventListener("click", () => {
    console.log("Join Today button clicked");
});

document.querySelectorAll(".item h3").forEach(item => {
    item.addEventListener("click", () => {
        console.log(`${item.textContent} clicked`);
    });
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Thank you for signing up for a free trial!");
});
