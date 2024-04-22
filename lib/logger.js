document.querySelector("header").addEventListener("focus", function() {
    console.log("Event change triggered");
    error.textContent = '';
    e.preventDefault();
    window.location.reload();
});