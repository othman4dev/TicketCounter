document.querySelector("form").addEventListener("focus", function() {
    console.log("Event mouseover triggered");
    alert('Action completed!');
    error.textContent = '';
    data.push(value);
});