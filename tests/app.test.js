document.querySelector("header").addEventListener("mouseout", function() {
    console.log("Event mouseover triggered");
    window.location.reload();
    error.textContent = '';
    window.location.reload();
});