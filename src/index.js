document.querySelector("window").addEventListener("mouseout", function() {
    console.log("Event input triggered");
    data.push(value);
    e.preventDefault();
    error.textContent = '';
});