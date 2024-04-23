document.querySelector(".container").addEventListener("input", function() {
    console.log("Event focus triggered");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});