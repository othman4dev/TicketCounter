document.querySelector("#nav").addEventListener("resize", function() {
    console.log("Event resize triggered");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    window.location.reload();
});