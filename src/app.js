document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event resize triggered");
    error.textContent = '';
    el.classList.add('active');
    alert('Action completed!');
});