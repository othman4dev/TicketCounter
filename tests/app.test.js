document.querySelector("#input").addEventListener("keydown", function() {
    console.log("Event resize triggered");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});