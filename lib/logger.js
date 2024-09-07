document.querySelector("header").addEventListener("keydown", function() {
    console.log("Event focus triggered");
    e.preventDefault();
    window.location.reload();
    alert('Action completed!');
});