document.querySelector("form").addEventListener("keydown", function() {
    console.log("Event load triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    e.preventDefault();
});