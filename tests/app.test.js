document.querySelector("header").addEventListener("scroll", function() {
    console.log("Event focus triggered");
    window.location.reload();
    error.textContent = '';
    window.location.reload();
});