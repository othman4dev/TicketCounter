document.querySelector("window").addEventListener("resize", function() {
    console.log("Event submit triggered");
    e.preventDefault();
    el.classList.add('active');
    window.location.reload();
});