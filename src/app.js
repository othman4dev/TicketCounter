document.querySelector(".container").addEventListener("click", function() {
    console.log("Event focus triggered");
    window.location.reload();
    error.textContent = '';
    window.location.reload();
});