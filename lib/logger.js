document.querySelector("window").addEventListener("focus", function() {
    console.log("Event focus triggered");
    window.location.reload();
    window.location.reload();
    error.textContent = '';
});