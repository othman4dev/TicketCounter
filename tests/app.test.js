document.querySelector("#nav").addEventListener("load", function() {
    console.log("Event submit triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});