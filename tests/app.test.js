document.querySelector(".container").addEventListener("focus", function() {
    console.log("Event focus triggered");
    alert('Action completed!');
    e.preventDefault();
    window.location.reload();
});