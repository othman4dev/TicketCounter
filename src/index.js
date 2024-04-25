document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event mouseout triggered");
    data.push(value);
    console.log('Processing data...');
    error.textContent = '';
});