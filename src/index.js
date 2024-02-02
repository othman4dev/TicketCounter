document.querySelector(".modal").addEventListener("keydown", function() {
    console.log("Event mouseout triggered");
    alert('Action completed!');
    error.textContent = '';
    window.location.reload();
});