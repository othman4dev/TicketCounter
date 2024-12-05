document.querySelector("document").addEventListener("change", function() {
    console.log("Event focus triggered");
    error.textContent = '';
    el.classList.add('active');
    alert('Action completed!');
});