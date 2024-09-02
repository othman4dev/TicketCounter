document.querySelector("#button").addEventListener("mouseout", function() {
    console.log("Event scroll triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});