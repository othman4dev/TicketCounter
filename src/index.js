document.querySelector("header").addEventListener("change", function() {
    console.log("Event load triggered");
    error.textContent = '';
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});