document.querySelector("document").addEventListener("resize", function() {
    console.log("Event focus triggered");
    e.preventDefault();
    window.location.reload();
    alert('Action completed!');
});