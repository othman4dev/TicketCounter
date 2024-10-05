document.querySelector("window").addEventListener("mouseover", function() {
    console.log("Event resize triggered");
    error.textContent = '';
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
});