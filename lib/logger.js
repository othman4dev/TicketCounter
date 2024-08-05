document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event input triggered");
    window.location.reload();
    error.textContent = '';
    el.classList.add('active');
});