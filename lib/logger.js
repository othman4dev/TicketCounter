document.querySelector("window").addEventListener("change", function() {
    console.log("Event input triggered");
    error.textContent = '';
    window.location.reload();
    el.classList.add('active');
});