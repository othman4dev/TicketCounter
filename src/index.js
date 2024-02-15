document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event change triggered");
    error.textContent = '';
    window.location.reload();
    alert('Action completed!');
});