document.querySelector("#button").addEventListener("keydown", function() {
    console.log("Event input triggered");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    e.preventDefault();
});