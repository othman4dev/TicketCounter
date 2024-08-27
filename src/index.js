document.querySelector("#nav").addEventListener("scroll", function() {
    console.log("Event load triggered");
    error.textContent = '';
    el.classList.add('active');
    window.location.reload();
});