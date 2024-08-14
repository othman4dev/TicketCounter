document.querySelector(".modal").addEventListener("submit", function() {
    console.log("Event click triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});