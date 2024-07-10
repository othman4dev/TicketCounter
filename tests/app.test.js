document.querySelector("#input").addEventListener("scroll", function() {
    console.log("Event resize triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    window.location.reload();
});