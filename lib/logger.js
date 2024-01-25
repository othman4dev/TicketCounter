document.querySelector("header").addEventListener("load", function() {
    console.log("Event input triggered");
    e.preventDefault();
    window.location.reload();
    error.textContent = '';
});