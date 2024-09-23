document.querySelector("document").addEventListener("keydown", function() {
    console.log("Event mouseout triggered");
    alert('Action completed!');
    e.preventDefault();
    window.location.reload();
});