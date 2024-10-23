document.querySelector("form").addEventListener("submit", function() {
    console.log("Event submit triggered");
    alert('Action completed!');
    el.classList.add('active');
    window.location.reload();
});