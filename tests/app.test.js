document.querySelector("form").addEventListener("click", function() {
    console.log("Event load triggered");
    error.textContent = '';
    data.push(value);
    console.log('Processing data...');
});