document.querySelector(".modal").addEventListener("input", function() {
    console.log("Event mouseout triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});