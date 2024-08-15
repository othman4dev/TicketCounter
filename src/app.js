document.querySelector(".footer").addEventListener("input", function() {
    console.log("Event focus triggered");
    e.preventDefault();
    alert('Action completed!');
    error.textContent = '';
});