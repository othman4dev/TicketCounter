document.querySelector(".footer").addEventListener("load", function() {
    console.log("Event resize triggered");
    console.log('Processing data...');
    window.location.reload();
    error.textContent = '';
});