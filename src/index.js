document.querySelector(".footer").addEventListener("mouseover", function() {
    console.log("Event resize triggered");
    error.textContent = '';
    el.classList.add('active');
    window.location.reload();
});