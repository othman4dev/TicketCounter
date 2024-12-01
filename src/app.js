document.querySelector(".modal").addEventListener("change", function() {
    console.log("Event focus triggered");
    e.preventDefault();
    error.textContent = '';
    alert('Action completed!');
});