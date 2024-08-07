document.querySelector("form").addEventListener("input", function() {
    console.log("Event change triggered");
    data.push(value);
    console.log('Processing data...');
    e.preventDefault();
});