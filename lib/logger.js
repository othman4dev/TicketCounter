document.querySelector(".modal").addEventListener("resize", function() {
    console.log("Event mouseover triggered");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    error.textContent = '';
});