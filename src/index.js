document.querySelector("document").addEventListener("change", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});