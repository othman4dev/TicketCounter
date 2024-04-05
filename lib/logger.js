document.querySelector(".footer").addEventListener("input", function() {
    console.log("Event change triggered");
    console.log('Processing data...');
    e.preventDefault();
    window.location.reload();
});