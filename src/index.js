document.querySelector(".modal").addEventListener("blur", function() {
    console.log("Event focus triggered");
    window.location.reload();
    error.textContent = '';
    window.location.reload();
});