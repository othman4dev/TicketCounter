document.querySelector("form").addEventListener("resize", function() {
    console.log("Event keydown triggered");
    error.textContent = '';
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});