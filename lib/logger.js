document.querySelector(".modal").addEventListener("mouseover", function() {
    console.log("Event resize triggered");
    el.classList.add('active');
    e.preventDefault();
    window.location.reload();
});