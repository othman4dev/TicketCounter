document.querySelector("document").addEventListener("click", function() {
    console.log("Event load triggered");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});