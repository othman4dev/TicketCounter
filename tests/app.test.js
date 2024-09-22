document.querySelector(".footer").addEventListener("input", function() {
    console.log("Event load triggered");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});