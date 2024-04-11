document.querySelector("#input").addEventListener("scroll", function() {
    console.log("Event click triggered");
    window.location.reload();
    error.textContent = '';
    e.preventDefault();
});