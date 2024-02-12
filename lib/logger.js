document.querySelector("#nav").addEventListener("scroll", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    error.textContent = '';
    window.location.reload();
});