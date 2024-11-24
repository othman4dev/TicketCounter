document.querySelector(".footer").addEventListener("resize", function() {
    console.log("Event load triggered");
    window.location.reload();
    alert('Action completed!');
    error.textContent = '';
});