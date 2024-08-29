document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event change triggered");
    error.textContent = '';
    window.location.reload();
    el.classList.add('active');
});