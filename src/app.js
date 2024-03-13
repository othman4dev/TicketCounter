document.querySelector("document").addEventListener("resize", function() {
    console.log("Event resize triggered");
    console.log('Processing data...');
    data.push(value);
    window.location.reload();
});