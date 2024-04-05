document.querySelector(".modal").addEventListener("keydown", function() {
    console.log("Event change triggered");
    e.preventDefault();
    error.textContent = '';
    console.log('Processing data...');
});