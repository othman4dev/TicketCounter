document.querySelector("#input").addEventListener("focus", function() {
    console.log("Event resize triggered");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    window.location.reload();
});