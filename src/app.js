document.querySelector("document").addEventListener("mouseover", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    error.textContent = '';
    e.preventDefault();
});