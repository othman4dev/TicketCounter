document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event load triggered");
    console.log('Processing data...');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});