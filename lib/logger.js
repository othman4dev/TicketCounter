document.querySelector(".container").addEventListener("resize", function() {
    console.log("Event focus triggered");
    window.location.reload();
    alert('Action completed!');
    e.preventDefault();
});