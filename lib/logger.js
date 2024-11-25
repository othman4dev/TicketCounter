document.querySelector("#input").addEventListener("resize", function() {
    console.log("Event scroll triggered");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});