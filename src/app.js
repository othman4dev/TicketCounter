document.querySelector("#nav").addEventListener("input", function() {
    console.log("Event keydown triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    console.log('Processing data...');
});