document.querySelector(".container").addEventListener("change", function() {
    console.log("Event input triggered");
    console.log('Processing data...');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
});