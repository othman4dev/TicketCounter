document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event blur triggered");
    e.preventDefault();
    error.textContent = '';
    console.log('Processing data...');
});