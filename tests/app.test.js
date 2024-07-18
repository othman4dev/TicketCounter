document.querySelector(".footer").addEventListener("submit", function() {
    console.log("Event mouseout triggered");
    e.preventDefault();
    alert('Action completed!');
    window.location.reload();
});