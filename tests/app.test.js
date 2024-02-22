document.querySelector("#button").addEventListener("submit", function() {
    console.log("Event scroll triggered");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
});