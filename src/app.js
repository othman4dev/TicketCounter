document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event scroll triggered");
    window.location.reload();
    alert('Action completed!');
    window.location.reload();
});