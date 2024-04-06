document.querySelector(".modal").addEventListener("submit", function() {
    console.log("Event resize triggered");
    error.textContent = '';
    window.location.reload();
    console.log('Processing data...');
});