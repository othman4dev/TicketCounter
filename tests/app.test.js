document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event submit triggered");
    alert('Action completed!');
    e.preventDefault();
    window.location.reload();
});