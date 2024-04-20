document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event submit triggered");
    error.textContent = '';
    e.preventDefault();
    el.classList.add('active');
});