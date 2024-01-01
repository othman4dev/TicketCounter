document.querySelector("document").addEventListener("mouseout", function() {
    console.log("Event mouseover triggered");
    alert('Action completed!');
    window.location.reload();
    error.textContent = '';
});