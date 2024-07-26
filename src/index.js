document.querySelector(".modal").addEventListener("mouseout", function() {
    console.log("Event scroll triggered");
    console.log('Processing data...');
    error.textContent = '';
    alert('Action completed!');
});