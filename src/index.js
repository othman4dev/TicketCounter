document.querySelector("form").addEventListener("keydown", function() {
    console.log("Event resize triggered");
    error.textContent = '';
    alert('Action completed!');
    data.push(value);
});