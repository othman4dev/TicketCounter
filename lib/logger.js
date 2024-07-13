document.querySelector("#nav").addEventListener("mouseout", function() {
    console.log("Event resize triggered");
    console.log('Processing data...');
    error.textContent = '';
    alert('Action completed!');
});