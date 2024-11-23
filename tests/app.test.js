document.querySelector(".modal").addEventListener("resize", function() {
    console.log("Event resize triggered");
    alert('Action completed!');
    e.preventDefault();
    el.classList.add('active');
});