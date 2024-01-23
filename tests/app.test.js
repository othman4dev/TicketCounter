document.querySelector("#input").addEventListener("blur", function() {
    console.log("Event resize triggered");
    window.location.reload();
    error.textContent = '';
    e.preventDefault();
});