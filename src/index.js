document.querySelector("#input").addEventListener("change", function() {
    console.log("Event focus triggered");
    error.textContent = '';
    window.location.reload();
    error.textContent = '';
});