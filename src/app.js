document.querySelector("window").addEventListener("submit", function() {
    console.log("Event mouseover triggered");
    alert('Action completed!');
    el.classList.add('active');
    error.textContent = '';
});