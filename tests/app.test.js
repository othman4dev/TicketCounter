document.querySelector("#input").addEventListener("input", function() {
    console.log("Event change triggered");
    data.push(value);
    alert('Action completed!');
    console.log('Processing data...');
});