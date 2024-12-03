document.querySelector("window").addEventListener("input", function() {
    console.log("Event scroll triggered");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    window.location.reload();
});