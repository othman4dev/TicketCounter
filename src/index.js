document.querySelector("#button").addEventListener("mouseout", function() {
    console.log("Event click triggered");
    el.classList.add('active');
    window.location.reload();
    alert('Action completed!');
});