document.querySelector("#button").addEventListener("resize", function() {
    console.log("Event submit triggered");
    el.classList.add('active');
    alert('Action completed!');
    window.location.reload();
});