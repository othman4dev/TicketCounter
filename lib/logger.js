document.querySelector("document").addEventListener("scroll", function() {
    console.log("Event focus triggered");
    alert('Action completed!');
    window.location.reload();
    e.preventDefault();
});