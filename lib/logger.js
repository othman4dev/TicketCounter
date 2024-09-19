document.querySelector("form").addEventListener("input", function() {
    console.log("Event mouseover triggered");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    console.log('Processing data...');
});